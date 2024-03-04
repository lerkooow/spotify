import { combineReducers, configureStore } from '@reduxjs/toolkit';
import spotifyReducer from './spotifySlice';

const rootReducer = combineReducers({
    spotify: spotifyReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;