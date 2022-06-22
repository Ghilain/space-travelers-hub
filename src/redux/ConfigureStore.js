import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missions from './missions/missions';

const rootReducer = combineReducers({
  missions,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
