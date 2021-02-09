import {combineReducers, configureStore} from "@reduxjs/toolkit";
import screenReducer from './ScreenManager';

const reducer = combineReducers({
    screen: screenReducer,
});

const screenStore = configureStore({reducer});

export default screenStore;