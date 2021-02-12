import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: false,
    isOpen: false,
};

const slice = createSlice({
    name: "displayMode",
    initialState: initialState,
    reducers: {
        setDisplayMode: (state, action) => {
            return Object.assign({}, state, action.payload);
        },
    }
});

const displayModeReducer = slice.reducer;

export const {setDisplayMode} = slice.actions;
export default displayModeReducer;