import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './Rocket/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
  },
});

export default store;
