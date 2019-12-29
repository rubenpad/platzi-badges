import { combineReducers } from 'redux';
import badgesReducer from './badgesReducer';

const rootReducer = combineReducers({ badgesReducer });

export default rootReducer;
