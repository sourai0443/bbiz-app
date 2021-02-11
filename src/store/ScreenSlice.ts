import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    id:1,
    name: "Home",
};

const slice = createSlice({
    name: "screen",
    initialState,
    reducers: {
        setScreen: (state, action) => {
            return Object.assign({}, state, {id: action.payload.id, name: action.payload.name})
        },
    }
});

export default slice.reducer;
export const {setScreen} = slice.actions;