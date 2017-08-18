import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from './InputConnect';
import InputSlider from './InputSliderConnect';
import SvgScaleDisplay from './SvgScaleDisplay';
import OutputPath from '../components/OutputPath';
import StrokeArc from '../logic/getCurveApproximateCircle';
import * as actions from '../actions/index';

const strokeArcContainer = ({ path, isVisible, radius, x, y }) => (
  <div className="arc-container" style={{ display: isVisible ? null : 'none' }}>
    <div className="inputs-data">
      <Input
        name="Center X"
        defaultValue={x}
        action={actions.changeStrokeCenterX}
        container="strokeArc"
        storeName="x"
      />
      <Input
        name="Center Y"
        defaultValue={y}
        action={actions.changeStrokeCenterY}
        container="strokeArc"
        storeName="y"
      />
      <Input
        name="Radius"
        defaultValue={radius}
        action={actions.changeStrokeRadius}
        container="strokeArc"
        storeName="radius"
      />
      <InputSlider
        name="Start Angle"
        action={actions.changeStrokeStartAngle}
        container="strokeArc"
        storeName="startAngle"
      />
      <InputSlider
        name="End Angle"
        action={actions.changeStrokeEndAngle}
        container="strokeArc"
        storeName="endAngle"
      />
    </div>
    <SvgScaleDisplay
      zoom={actions.changeStrokeZoom}
      dragStart={actions.strokeDragStart}
      dragMove={actions.strokeDragMove}
      dragEnd={actions.strokeDragEnd}
      changeBtnZoomIn={actions.changeStrokeBtnZoomIn}
      changeBtnZoomOut={actions.changeStrokeBtnZoomOut}
      changeBtnPan={actions.changeStrokeBtnPan}
      autoScale={actions.strokeAutoScale}
      initParam={actions.initStrokeParam}
      container="stroke"
      pathClass="stroke-svg-path"
      path={path}
    />
    <OutputPath path={path} />
  </div>
);


const mapStateToProps = state => ({
  path: StrokeArc(
    +state.strokeArc.startAngle,
    +state.strokeArc.endAngle,
    +state.strokeArc.radius,
    +state.strokeArc.x,
    +state.strokeArc.y,
  ),
  isVisible: state.isVisible.strokeArcContainer,
  radius: state.strokeArc.radius,
  x: state.strokeArc.x,
  y: state.strokeArc.y,
});
const StrokeArcContainer = connect(mapStateToProps)(strokeArcContainer);


strokeArcContainer.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  radius: PropTypes.node.isRequired,
  x: PropTypes.node.isRequired,
  y: PropTypes.node.isRequired,
};

export default StrokeArcContainer;
