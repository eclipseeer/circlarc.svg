import initialState from '../store/initialState';
import { VISIBLE_ACTIONS_TYPE } from '../actions/index';

function isVisible(state = initialState.isVisible, action) {
  if (action.type === VISIBLE_ACTIONS_TYPE.VISIBLE_STROKE_ARC) {
    return {
      strokeArcContainer: true,
      figureArcContainer: false,
    };
  }
  if (action.type === VISIBLE_ACTIONS_TYPE.VISIBLE_FIGURE_ARC) {
    return {
      strokeArcContainer: false,
      figureArcContainer: true,
    };
  }
  return state;
}

export default isVisible;
