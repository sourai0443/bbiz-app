import {combineReducers, configureStore} from "@reduxjs/toolkit";
import screenReducer from './slice/ScreenSlice';

const combinedScreenReducer = combineReducers({
    screen: screenReducer,
});
export {combinedScreenReducer};

const screenStore = configureStore({reducer: combinedScreenReducer});
export default screenStore;