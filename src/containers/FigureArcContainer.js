import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './InputConnect';
import InputSlider from './InputSliderConnect';
import SvgScaleDisplay from './SvgScaleDisplay';
import OutputPath from '../components/OutputPath';
import FigureArc from '../logic/FigureCircleArc';
import * as actions from '../actions/index';

const figureArcContainer = ({ path, isVisible, outerR, innerR, x, y }) => (
  <div className="arc-container" style={{ display: isVisible ? null : 'none' }}>
    <div className="inputs-data">
      <InputSlider
        name="Start Angle"
        action={actions.changeFigureStartAngle}
        container="figureArc"
        storeName="startAngle"
      />
      <InputSlider
        name="End Angle"
        action={actions.changeFigureEndAngle}
        container="figureArc"
        storeName="endAngle"
      />
      <Input
        name="Outer Radius"
        defaultValue={outerR}
        action={actions.changeFigureOuterRadius}
        container="figureArc"
        storeName="outerRadius"
      />
      <Input
        name="Inner Radius"
        defaultValue={innerR}
        action={actions.changeFigureInnerRadius}
        container="figureArc"
        storeName="innerRadius"
      />
      <Input
        name="Center X"
        defaultValue={x}
        action={actions.changeFigureCenterX}
        container="figureArc"
        storeName="x"
      />
      <Input
        name="Center Y"
        defaultValue={y}
        action={actions.changeFigureCenterY}
        container="figureArc"
        storeName="y"
      />
    </div>
    <SvgScaleDisplay
      zoom={actions.changeFigureZoom}
      dragStart={actions.figureDragStart}
      dragMove={actions.figureDragMove}
      dragEnd={actions.figureDragEnd}
      changeBtnZoomIn={actions.changeFigureBtnZoomIn}
      changeBtnZoomOut={actions.changeFigureBtnZoomOut}
      changeBtnPan={actions.changeFigureBtnPan}
      autoScale={actions.figureAutoScale}
      initParam={actions.initFigureParam}
      container="figure"
      pathClass="figure-svg-path"
      path={path}
    />
    <OutputPath path={path} />
  </div>
);


const mapStateToProps = state => ({
  path: FigureArc(
    +state.figureArc.startAngle,
    +state.figureArc.endAngle,
    +state.figureArc.outerRadius,
    +state.figureArc.innerRadius,
    +state.figureArc.x,
    +state.figureArc.y,
  ),
  isVisible: state.isVisible.figureArcContainer,
  outerR: state.figureArc.outerRadius,
  innerR: state.figureArc.innerRadius,
  x: state.figureArc.x,
  y: state.figureArc.y,
});
const FigureArcContainer = connect(mapStateToProps)(figureArcContainer);


figureArcContainer.propTypes = {
  path: PropTypes.string.isRequired,
  isVisible: PropTypes.bool.isRequired,
  outerR: PropTypes.node.isRequired,
  innerR: PropTypes.node.isRequired,
  x: PropTypes.node.isRequired,
  y: PropTypes.node.isRequired,
};

export default FigureArcContainer;
