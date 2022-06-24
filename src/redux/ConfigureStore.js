import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketsReducer from './Rockets/rockets';
import missions from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
