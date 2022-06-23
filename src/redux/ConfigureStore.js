import { combineReducers, applyMiddleware, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketss from './Rocket/rockets';
import missions from './missions/missions';

const rootReducer = combineReducers({
  missions, rocketss,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
