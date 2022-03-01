import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';

const reducer = combineReducers({
  missionsReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
