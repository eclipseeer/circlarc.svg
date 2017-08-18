const toFixexNumber = (number, x) => {
  const pow = 10 ** x;
  return +(Math.round(number * pow) / pow);
};
const SmallArc = (A1, A2, R, Cx, Cy) => {
  const sin = angle => Math.sin(angle) * R;
  const cos = angle => Math.cos(angle) * R;
  const StartAngle = A1 * (Math.PI / 180);
  const EndAngle = A2 * (Math.PI / 180);
  const halfAngle = (EndAngle - StartAngle) / 2;
  const K = (4 / 3) * ((1 - Math.cos(halfAngle)) / Math.sin(halfAngle));
  const p1x = toFixexNumber(Cx + cos(StartAngle), 2);
  const p1y = toFixexNumber(Cy + sin(StartAngle), 2);
  const p4x = toFixexNumber(Cx + cos(EndAngle), 2);
  const p4y = toFixexNumber(Cy + sin(EndAngle), 2);
  const p2x = toFixexNumber(p1x - (K * sin(StartAngle)), 2);
  const p2y = toFixexNumber(p1y + (K * cos(StartAngle)), 2);
  const p3x = toFixexNumber(p4x + (K * sin(EndAngle)), 2);
  const p3y = toFixexNumber(p4y - (K * cos(EndAngle)), 2);
  const curve = `${p1x} ${p1y} C ${p2x} ${p2y} ${p3x} ${p3y} ${p4x} ${p4y} `;
  return curve;
};
function StrokeArc(startAngle, endAngle, radius, Cx, Cy, internal) {
  if (
    typeof startAngle !== 'number' ||
    typeof endAngle !== 'number' ||
    typeof radius !== 'number' ||
    typeof Cx !== 'number' ||
    typeof Cy !== 'number'
  ) return '';
  const sgn = startAngle < endAngle ? 1 : -1;
  const spoint = internal ? 'L ' : 'M ';
  const Arc = [];
  let a2;
  let M;
  let totalAngle;
  let a1 = startAngle;
  for (totalAngle = Math.min(360, (sgn * (endAngle - startAngle))); totalAngle > 0; '') {
    a2 = a1 + (sgn * Math.min(totalAngle, 90));
    M = (a1 === startAngle) ? spoint : 'L ';
    Arc.push(M, SmallArc(a1, a2, radius, Cx, Cy));
    totalAngle -= Math.abs(a2 - a1);
    a1 = a2;
  }
  return Arc.join('');
}
export default StrokeArc;
