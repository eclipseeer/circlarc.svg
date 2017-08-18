import { combineReducers } from 'redux';
import strokeArc from './strokeArc';
import figureArc from './figureArc';
import isVisible from './isVisible';
import strokeViewBox from './strokeViewBox';
import figureViewBox from './figureViewBox';

const reducer = combineReducers({
  strokeArc,
  figureArc,
  isVisible,
  strokeViewBox,
  figureViewBox,
});

export default reducer;
