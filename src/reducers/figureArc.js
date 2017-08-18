import initialState from '../store/initialState';
import { FIGURE_ACTIONS_TYPE } from '../actions/index';


function figureArc(state = initialState.figureArc, action) {
  if (action.type === FIGURE_ACTIONS_TYPE.CHANGE_START_ANGLE) {
    return { ...state, startAngle: action.startAngle };
  }
  if (action.type === FIGURE_ACTIONS_TYPE.CHANGE_END_ANGLE) {
    return { ...state, endAngle: action.endAngle };
  }
  if (action.type === FIGURE_ACTIONS_TYPE.CHANGE_OUTER_RADIUS) {
    return { ...state, outerRadius: action.outerRadius };
  }
  if (action.type === FIGURE_ACTIONS_TYPE.CHANGE_INNER_RADIUS) {
    return { ...state, innerRadius: action.innerRadius };
  }
  if (action.type === FIGURE_ACTIONS_TYPE.CHANGE_CENTER_X) {
    return { ...state, x: action.x };
  }
  if (action.type === FIGURE_ACTIONS_TYPE.CHANGE_CENTER_Y) {
    return { ...state, y: action.y };
  }
  if (action.type === FIGURE_ACTIONS_TYPE.INIT_PARAMETRES) {
    return {
      ...state,
      x: action.x,
      y: action.y,
      outerRadius: action.outerRadius,
      innerRadius: action.innerRadius,
    };
  }
  return state;
}

export default figureArc;
