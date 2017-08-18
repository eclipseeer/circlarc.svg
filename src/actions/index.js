export const STROKE_ACTIONS_TYPE = {
  CHANGE_START_ANGLE: 'CHANGE_STROKE_START_ANGLE',
  CHANGE_END_ANGLE: 'CHANGE_STROKE_END_ANGLE',
  CHANGE_RADIUS: 'CHANGE_STROKE_RADIUS',
  CHANGE_CENTER_X: 'CHANGE_STROKE_CENTER_X',
  CHANGE_CENTER_Y: 'CHANGE_STROKE_CENTER_Y',
  INIT_PARAMETRES: 'STROKE_INIT_PARAMETRES',
};
export const FIGURE_ACTIONS_TYPE = {
  CHANGE_START_ANGLE: 'CHANGE_FIGURE_START_ANGLE',
  CHANGE_END_ANGLE: 'CHANGE_FIGURE_END_ANGLE',
  CHANGE_OUTER_RADIUS: 'CHANGE_FIGURE_OUTER_RADIUS',
  CHANGE_INNER_RADIUS: 'CHANGE_FIGURE_INNER_RADIUS',
  CHANGE_CENTER_X: 'CHANGE_FIGURE_CENTER_X',
  CHANGE_CENTER_Y: 'CHANGE_FIGURE_CENTER_Y',
  INIT_PARAMETRES: 'FIGURE_INIT_PARAMETRES',
};
export const VISIBLE_ACTIONS_TYPE = {
  VISIBLE_STROKE_ARC: 'VISIBLE_STROKE_ARC',
  VISIBLE_FIGURE_ARC: 'VISIBLE_FIGURE_ARC',
};
export const STROKE_VIEW_BOX_ACTIONS_TYPE = {
  CHANGE_ZOOM: 'CHANGE_STROKE_ZOOM',
  CHANGE_BNT_ZOOM_IN: 'CHANGE_STROKE_BNT_ZOOM_IN',
  CHANGE_BNT_ZOOM_OUT: 'CHANGE_STROKE_BNT_ZOOM_OUT',
  CHANGE_BNT_PAN: 'CHANGE_STROKE_BNT_PAN',
  DRAG_START: 'STROKE_DRAG_START',
  DRAG_MOVE: 'STROKE_DRAG_MOVE',
  DRAG_END: 'STROKE_DRAG_END',
  AUTO_SCALE: 'STROKE_AUTO_SCALE',
};
export const FIGURE_VIEW_BOX_ACTIONS_TYPE = {
  CHANGE_ZOOM: 'CHANGE_FIGURE_ZOOM',
  CHANGE_BNT_ZOOM_IN: 'CHANGE_FIGURE_BNT_ZOOM_IN',
  CHANGE_BNT_ZOOM_OUT: 'CHANGE_FIGURE_BNT_ZOOM_OUT',
  CHANGE_BNT_PAN: 'CHANGE_FIGURE_BNT_PAN',
  DRAG_START: 'FIGURE_DRAG_START',
  DRAG_MOVE: 'FIGURE_DRAG_MOVE',
  DRAG_END: 'FIGURE_DRAG_END',
  AUTO_SCALE: 'FIGURE_AUTO_SCALE',
};
/**
  * Зняття значень інпутів STROKE ARC
  *
 */
export const changeStrokeStartAngle = startAngle => ({
  type: STROKE_ACTIONS_TYPE.CHANGE_START_ANGLE,
  startAngle,
});
export const changeStrokeEndAngle = endAngle => ({
  type: STROKE_ACTIONS_TYPE.CHANGE_END_ANGLE,
  endAngle,
});
export const changeStrokeRadius = radius => ({
  type: STROKE_ACTIONS_TYPE.CHANGE_RADIUS,
  radius,
});
export const changeStrokeCenterX = x => ({
  type: STROKE_ACTIONS_TYPE.CHANGE_CENTER_X,
  x,
});
export const changeStrokeCenterY = y => ({
  type: STROKE_ACTIONS_TYPE.CHANGE_CENTER_Y,
  y,
});
export const initStrokeParam = (x, y, radius) => ({
  type: STROKE_ACTIONS_TYPE.INIT_PARAMETRES,
  x,
  y,
  radius,
});
/**
  * Зняття значень інпутів FIGURE ARC
  *
 */
export const changeFigureStartAngle = startAngle => ({
  type: FIGURE_ACTIONS_TYPE.CHANGE_START_ANGLE,
  startAngle,
});
export const changeFigureEndAngle = endAngle => ({
  type: FIGURE_ACTIONS_TYPE.CHANGE_END_ANGLE,
  endAngle,
});
export const changeFigureOuterRadius = outerRadius => ({
  type: FIGURE_ACTIONS_TYPE.CHANGE_OUTER_RADIUS,
  outerRadius,
});
export const changeFigureInnerRadius = innerRadius => ({
  type: FIGURE_ACTIONS_TYPE.CHANGE_INNER_RADIUS,
  innerRadius,
});
export const changeFigureCenterX = x => ({
  type: FIGURE_ACTIONS_TYPE.CHANGE_CENTER_X,
  x,
});
export const changeFigureCenterY = y => ({
  type: FIGURE_ACTIONS_TYPE.CHANGE_CENTER_Y,
  y,
});
export const initFigureParam = (x, y, outerRadius, innerRadius) => ({
  type: FIGURE_ACTIONS_TYPE.INIT_PARAMETRES,
  x,
  y,
  outerRadius,
  innerRadius,
});
/**
  * Переключення між контейнерами STROKE ARC i FIGURE ARC
  *
 */
export const isVisibleStroke = () => ({
  type: VISIBLE_ACTIONS_TYPE.VISIBLE_STROKE_ARC,
});
export const isVisibleFigure = () => ({
  type: VISIBLE_ACTIONS_TYPE.VISIBLE_FIGURE_ARC,
});
/**
 *  Зміна зуму і панорами STROKE ARC DISPLAY
 *
 */
export const changeStrokeZoom = (width, height, k) => ({
  type: STROKE_VIEW_BOX_ACTIONS_TYPE.CHANGE_ZOOM,
  width,
  height,
  k,
});
export const changeStrokeBtnZoomIn = (isZoomIn, btnZoomIn, svgCursor) => ({
  type: STROKE_VIEW_BOX_ACTIONS_TYPE.CHANGE_BNT_ZOOM_IN,
  isZoomIn,
  btnZoomIn,
  svgCursor,
});
export const changeStrokeBtnZoomOut = (isZoomOut, btnZoomOut, svgCursor) => ({
  type: STROKE_VIEW_BOX_ACTIONS_TYPE.CHANGE_BNT_ZOOM_OUT,
  isZoomOut,
  btnZoomOut,
  svgCursor,
});
export const changeStrokeBtnPan = (isPan, btnPan, svgCursor) => ({
  type: STROKE_VIEW_BOX_ACTIONS_TYPE.CHANGE_BNT_PAN,
  isPan,
  btnPan,
  svgCursor,
});
export const strokeDragStart = (dragX, dragY) => ({
  type: STROKE_VIEW_BOX_ACTIONS_TYPE.DRAG_START,
  dragX,
  dragY,
});
export const strokeDragMove = (vbX, vbY, dragX, dragY) => ({
  type: STROKE_VIEW_BOX_ACTIONS_TYPE.DRAG_MOVE,
  vbX,
  vbY,
  dragX,
  dragY,
});
export const strokeDragEnd = () => ({
  type: STROKE_VIEW_BOX_ACTIONS_TYPE.DRAG_END,
});
export const strokeAutoScale = (vbX, vbY, width, height, k) => ({
  type: STROKE_VIEW_BOX_ACTIONS_TYPE.AUTO_SCALE,
  vbX,
  vbY,
  width,
  height,
  k,
});

/**
 *  Зміна зуму і панорами Figure ARC DISPLAY
 *
 */
export const changeFigureZoom = (width, height, k) => ({
  type: FIGURE_VIEW_BOX_ACTIONS_TYPE.CHANGE_ZOOM,
  width,
  height,
  k,
});
export const changeFigureBtnZoomIn = (isZoomIn, btnZoomIn, svgCursor) => ({
  type: FIGURE_VIEW_BOX_ACTIONS_TYPE.CHANGE_BNT_ZOOM_IN,
  isZoomIn,
  btnZoomIn,
  svgCursor,
});
export const changeFigureBtnZoomOut = (isZoomOut, btnZoomOut, svgCursor) => ({
  type: FIGURE_VIEW_BOX_ACTIONS_TYPE.CHANGE_BNT_ZOOM_OUT,
  isZoomOut,
  btnZoomOut,
  svgCursor,
});
export const changeFigureBtnPan = (isPan, btnPan, svgCursor) => ({
  type: FIGURE_VIEW_BOX_ACTIONS_TYPE.CHANGE_BNT_PAN,
  isPan,
  btnPan,
  svgCursor,
});
export const figureDragStart = (dragX, dragY) => ({
  type: FIGURE_VIEW_BOX_ACTIONS_TYPE.DRAG_START,
  dragX,
  dragY,
});
export const figureDragMove = (vbX, vbY, dragX, dragY) => ({
  type: FIGURE_VIEW_BOX_ACTIONS_TYPE.DRAG_MOVE,
  vbX,
  vbY,
  dragX,
  dragY,
});
export const figureDragEnd = () => ({
  type: FIGURE_VIEW_BOX_ACTIONS_TYPE.DRAG_END,
});
export const figureAutoScale = (vbX, vbY, width, height, k) => ({
  type: FIGURE_VIEW_BOX_ACTIONS_TYPE.AUTO_SCALE,
  vbX,
  vbY,
  width,
  height,
  k,
});
