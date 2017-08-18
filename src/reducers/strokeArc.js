import initialState from '../store/initialState';
import { STROKE_ACTIONS_TYPE } from '../actions/index';

function strokeArc(state = initialState.strokeArc, action) {
  if (action.type === STROKE_ACTIONS_TYPE.CHANGE_START_ANGLE) {
    return { ...state, startAngle: action.startAngle };
  }
  if (action.type === STROKE_ACTIONS_TYPE.CHANGE_END_ANGLE) {
    return { ...state, endAngle: action.endAngle };
  }
  if (action.type === STROKE_ACTIONS_TYPE.CHANGE_RADIUS) {
    return { ...state, radius: action.radius };
  }
  if (action.type === STROKE_ACTIONS_TYPE.CHANGE_CENTER_X) {
    return { ...state, x: action.x };
  }
  if (action.type === STROKE_ACTIONS_TYPE.CHANGE_CENTER_Y) {
    return { ...state, y: action.y };
  }
  if (action.type === STROKE_ACTIONS_TYPE.INIT_PARAMETRES) {
    return {
      ...state,
      x: action.x,
      y: action.y,
      radius: action.radius,
    };
  }
  return state;
}

export default strokeArc;
