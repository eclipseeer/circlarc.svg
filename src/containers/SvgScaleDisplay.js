import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ButtonScale from '../components/ButtonScale';
import ZoomInIcon from '../components/icons/ZoomInIcon';
import ZoomOutIcon from '../components/icons/ZoomOutIcon';
import PanIcon from '../components/icons/PanIcon';
import AutoScaleIcon from '../components/icons/AutoScaleIcon';


class svgScaleDisplay extends React.Component {
  static getClientX(e) {
    return typeof e.clientX === 'undefined' ? e.changedTouches[0].clientX : e.clientX;
  }
  static getClientY(e) {
    return typeof e.clientY === 'undefined' ? e.changedTouches[0].clientY : e.clientY;
  }
  constructor(props) {
    super(props);
    this.onWheel = this.onWheel.bind(this);
    this.onClickZoom = this.onClickZoom.bind(this);
    this.onBntZoomIn = this.onBntZoomIn.bind(this);
    this.onBntZoomOut = this.onBntZoomOut.bind(this);
    this.onBntPan = this.onBntPan.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.onAutoScale = this.onAutoScale.bind(this);
  }
  componentDidMount() {
    const { zoom, initParam } = this.props;
    this.height = document.querySelector('.arc-view').clientHeight;
    this.width = document.querySelector('.arc-view').clientWidth;
    this.shortSide = this.width >= this.height ? this.height : this.width;
    const cX = Math.floor(this.width / 2);
    const cY = Math.floor(this.height / 2);
    const outerR = Math.floor((this.shortSide / 2) * 0.75);
    const innerR = Math.floor((this.shortSide / 2) * 0.50);
    zoom(this.width, this.height, 100);
    initParam(cX, cY, outerR, innerR);
  }
  onWheel(e) {
    e.preventDefault();
    const c = e.deltaY < 0 ? -10 : 10;
    this.zooming(c);
  }
  onClickZoom(e) {
    e.preventDefault();
    const c = this.props.isZoomIn ? -10 : 10;
    this.zooming(c);
  }
  onBntZoomIn() {
    const isZoomIn = this.props.isZoomIn === false;
    const btnZoomIn = isZoomIn ? 'button-zoom-in-active' : 'button-zoom-in';
    const svgCursor = isZoomIn ? 'zoom-in-cursor' : 'default-cursor';
    this.props.changeBtnZoomIn(isZoomIn, btnZoomIn, svgCursor);
  }
  onBntZoomOut() {
    const isZoomOut = this.props.isZoomOut === false;
    const btnZoomOut = isZoomOut ? 'button-zoom-out-active' : 'button-zoom-out';
    const svgCursor = isZoomOut ? 'zoom-out-cursor' : 'default-cursor';
    this.props.changeBtnZoomOut(isZoomOut, btnZoomOut, svgCursor);
  }
  onBntPan() {
    const isPan = this.props.isPan === false;
    const btnPan = isPan ? 'button-pan-active' : 'button-pan';
    const svgCursor = isPan ? 'grab-cursor' : 'default-cursor';
    this.props.changeBtnPan(isPan, btnPan, svgCursor);
  }
  onDragStart(e) {
    e.preventDefault();
    const dragX = this.constructor.getClientX(e);
    const dragY = this.constructor.getClientY(e);
    this.props.dragStart(dragX, dragY);
  }
  onDragMove(e) {
    e.preventDefault();
    if (!this.props.onDrag) return;
    const { vbX, vbY, dragX, dragY, k, dragMove } = this.props;
    const kof = k / 100;
    const x = this.constructor.getClientX(e);
    const y = this.constructor.getClientY(e);
    const newVbX = Math.floor(vbX - ((x - dragX) * kof));
    const newVbY = Math.floor(vbY - ((y - dragY) * kof));
    dragMove(newVbX, newVbY, x, y);
  }
  onAutoScale() {
    const { radius, cX, cY, autoScale } = this.props;
    const scale = radius / ((this.shortSide * 0.75) / 2);
    const vbHeight = Math.floor(this.height * scale);
    const vbWidth = Math.floor(this.width * scale);
    const vbX = Math.floor(cX - (vbWidth / 2));
    const vbY = Math.floor(cY - (vbHeight / 2));
    const k = Math.floor(scale * 100);
    autoScale(vbX, vbY, vbWidth, vbHeight, k);
  }
  zooming(c) {
    const kof = this.props.k + c;
    const k = kof < 10 ? 10 : kof;
    const height = (this.height * k) / 100;
    const width = (this.width * k) / 100;
    this.props.zoom(width, height, k);
  }
  render() {
    const {
      path,
      isZoomIn,
      isZoomOut,
      isPan,
      btnZoomIn,
      btnZoomOut,
      btnPan,
      svgCursor,
      viewBox,
      pathClass,
      k,
      vbX,
      vbY,
    } = this.props;
    return (
      <div className="arc-view">
        <div className="viewbox-info">
          <p className="zoom-percente">{`zoom: ${k}%`}</p>
          <p className="view-box-cordinate">{`x: ${vbX}`}</p>
          <p className="view-box-cordinate">{`y: ${vbY}`}</p>
        </div>
        <div className="container-buttons-scale">
          <ButtonScale
            icon={<ZoomInIcon className={btnZoomIn} />}
            className={btnZoomIn}
            onClick={this.onBntZoomIn}
            title="Zoom+"
          />
          <ButtonScale
            icon={<ZoomOutIcon className={btnZoomOut} />}
            className={btnZoomOut}
            onClick={this.onBntZoomOut}
            title="Zoom-"
          />
          <ButtonScale
            icon={<PanIcon className={btnPan} />}
            className={btnPan}
            onClick={this.onBntPan}
            title="Pan"
          />
          <ButtonScale
            icon={<AutoScaleIcon className="button-auto-scale" />}
            className="button-auto-scale"
            onClick={this.onAutoScale}
            title="Auto Scale"
          />
        </div>
        <svg
          className={`svg-display ${svgCursor}`}
          viewBox={viewBox}
          onClick={!isZoomIn && !isZoomOut ? null : this.onClickZoom}
          onWheel={!isZoomIn && !isZoomOut ? null : this.onWheel}
          onMouseDown={isPan ? this.onDragStart : null}
          onTouchStart={isPan ? this.onDragStart : null}
          onMouseMove={isPan ? this.onDragMove : null}
          onTouchMove={isPan ? this.onDragMove : null}
          onMouseUp={isPan ? this.props.dragEnd : null}
          onTouchEnd={isPan ? this.props.dragEnd : null}
        >
          <path className={pathClass} d={path} />
        </svg>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const s = state[`${ownProps.container}ViewBox`];
  const arc = state[`${ownProps.container}Arc`];
  const viewBox = `${s.vbX} ${s.vbY} ${s.width} ${s.height}`;
  return {
    ...s,
    viewBox,
    radius: arc.radius || arc.outerRadius,
    cX: arc.x,
    cY: arc.y,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
  zoom: (...props) => {
    dispatch(ownProps.zoom(...props));
  },
  dragStart: (...props) => {
    dispatch(ownProps.dragStart(...props));
  },
  dragMove: (...props) => {
    dispatch(ownProps.dragMove(...props));
  },
  dragEnd: () => {
    dispatch(ownProps.dragEnd());
  },
  changeBtnZoomIn: (...props) => {
    dispatch(ownProps.changeBtnZoomIn(...props));
  },
  changeBtnZoomOut: (...props) => {
    dispatch(ownProps.changeBtnZoomOut(...props));
  },
  changeBtnPan: (...props) => {
    dispatch(ownProps.changeBtnPan(...props));
  },
  autoScale: (...props) => {
    dispatch(ownProps.autoScale(...props));
  },
  initParam: (...props) => {
    dispatch(ownProps.initParam(...props));
  },
});

const SvgScaleDisplay = connect(
  mapStateToProps,
  mapDispatchToProps,
)(svgScaleDisplay);

svgScaleDisplay.propTypes = {
  isZoomIn: PropTypes.bool.isRequired,
  isZoomOut: PropTypes.bool.isRequired,
  isPan: PropTypes.bool.isRequired,
  onDrag: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  btnZoomIn: PropTypes.string.isRequired,
  btnZoomOut: PropTypes.string.isRequired,
  btnPan: PropTypes.string.isRequired,
  svgCursor: PropTypes.string.isRequired,
  viewBox: PropTypes.string.isRequired,
  pathClass: PropTypes.string.isRequired,
  k: PropTypes.number.isRequired,
  vbX: PropTypes.number.isRequired,
  vbY: PropTypes.number.isRequired,
  dragX: PropTypes.number.isRequired,
  dragY: PropTypes.number.isRequired,
  cX: PropTypes.node.isRequired,
  cY: PropTypes.node.isRequired,
  radius: PropTypes.node.isRequired,
  zoom: PropTypes.func.isRequired,
  dragStart: PropTypes.func.isRequired,
  dragMove: PropTypes.func.isRequired,
  dragEnd: PropTypes.func.isRequired,
  changeBtnZoomIn: PropTypes.func.isRequired,
  changeBtnZoomOut: PropTypes.func.isRequired,
  changeBtnPan: PropTypes.func.isRequired,
  autoScale: PropTypes.func.isRequired,
  initParam: PropTypes.func.isRequired,
};

export default SvgScaleDisplay;
