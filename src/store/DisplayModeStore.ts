import {combineReducers} from "redux";
import displayModeReducer from "./slice/DisplayModeSlice";
import {configureStore} from "@reduxjs/toolkit";

const combinedDisplayModeReducer = combineReducers(
    displayModeReducer,
);
export {combinedDisplayModeReducer};

const displayModeStore = configureStore({reducer: combinedDisplayModeReducer});
export default displayModeStore;