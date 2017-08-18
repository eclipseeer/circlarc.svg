import initialState from '../store/initialState';
import { STROKE_VIEW_BOX_ACTIONS_TYPE } from '../actions/index';

function strokeViewBox(state = initialState.strokeViewBox, action) {
  if (action.type === STROKE_VIEW_BOX_ACTIONS_TYPE.CHANGE_ZOOM) {
    return {
      ...state,
      width: action.width,
      height: action.height,
      k: action.k,
    };
  }
  if (action.type === STROKE_VIEW_BOX_ACTIONS_TYPE.CHANGE_BNT_ZOOM_IN) {
    return {
      ...state,
      isZoomIn: action.isZoomIn,
      isZoomOut: false,
      isPan: false,
      btnZoomIn: action.btnZoomIn,
      btnZoomOut: 'button-zoom-out',
      btnPan: 'button-pan',
      svgCursor: action.svgCursor,
    };
  }
  if (action.type === STROKE_VIEW_BOX_ACTIONS_TYPE.CHANGE_BNT_ZOOM_OUT) {
    return {
      ...state,
      isZoomIn: false,
      isZoomOut: action.isZoomOut,
      isPan: false,
      btnZoomIn: 'button-zoom-in',
      btnZoomOut: action.btnZoomOut,
      btnPan: 'button-pan',
      svgCursor: action.svgCursor,
    };
  }
  if (action.type === STROKE_VIEW_BOX_ACTIONS_TYPE.CHANGE_BNT_PAN) {
    return {
      ...state,
      isZoomIn: false,
      isZoomOut: false,
      isPan: action.isPan,
      btnZoomIn: 'button-zoom-in',
      btnZoomOut: 'button-zoom-out',
      btnPan: action.btnPan,
      svgCursor: action.svgCursor,
    };
  }
  if (action.type === STROKE_VIEW_BOX_ACTIONS_TYPE.DRAG_START) {
    return {
      ...state,
      onDrag: true,
      dragX: action.dragX,
      dragY: action.dragY,
      svgCursor: 'grabbing-cursor',
    };
  }
  if (action.type === STROKE_VIEW_BOX_ACTIONS_TYPE.DRAG_MOVE) {
    return {
      ...state,
      vbX: action.vbX,
      vbY: action.vbY,
      dragX: action.dragX,
      dragY: action.dragY,
    };
  }
  if (action.type === STROKE_VIEW_BOX_ACTIONS_TYPE.DRAG_END) {
    return {
      ...state,
      onDrag: false,
      svgCursor: 'grab-cursor',
    };
  }
  if (action.type === STROKE_VIEW_BOX_ACTIONS_TYPE.AUTO_SCALE) {
    return {
      ...state,
      vbX: action.vbX,
      vbY: action.vbY,
      width: action.width,
      height: action.height,
      k: action.k,
    };
  }
  return state;
}

export default strokeViewBox;
