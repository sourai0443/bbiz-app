import {combineReducers, configureStore} from "@reduxjs/toolkit";
import screenReducer from './ScreenSlice';

const reducer = combineReducers({
    screen: screenReducer,
});

const screenStore = configureStore({reducer});

export default screenStore;