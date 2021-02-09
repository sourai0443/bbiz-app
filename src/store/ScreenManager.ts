import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: "Home",
};

const slice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        setScreen: (state, action) => {
            return Object.assign({}, state, {name: action.payload})
        },
    }
});

export default slice.reducer;
export const {setScreen} = slice.actions;