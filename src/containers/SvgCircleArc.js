import React from 'react';
import Paper from 'material-ui/Paper';
import StrokeArcContainer from './StrokeArcContainer';
import FigureArcContainer from './FigureArcContainer';
import TabsToggle from './TabsContainer';

const style = {
  borderRadius: '3px',
};
const SvgCircleArc = () => (
  <Paper className="svg-circle-arc" style={style} zDepth={2}>
    <TabsToggle />
    <StrokeArcContainer />
    <FigureArcContainer />
  </Paper>
);

export default SvgCircleArc;
