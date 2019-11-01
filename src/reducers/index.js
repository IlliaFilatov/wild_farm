import { combineReducers } from 'redux';
import inventReducer from './inventReducer';
import marketReducer from './marketReducer';
import stockReducer from './stockReducer';

const allReducers = combineReducers({
  stock: stockReducer,
  invent: inventReducer,
  market: marketReducer
});

export default allReducers;