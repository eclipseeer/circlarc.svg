import StrokeArc from './getCurveApproximateCircle';

const FigureArc = (startAngle, endAngle, outerRadius, innerRadius, Cx, Cy) => {
  const outerArc = StrokeArc(startAngle, endAngle, outerRadius, Cx, Cy);
  const innerArc = StrokeArc(endAngle, startAngle, innerRadius, Cx, Cy, true);
  return `${outerArc} ${innerArc} Z`;
};

export default FigureArc;
