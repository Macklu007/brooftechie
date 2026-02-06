import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currenttab:"Student"
}


export const tabslice=createSlice({
    name:"tab",
    initialState:initialState,
    reducers:{
        settab(state,action){
            state.currenttab=action.payload;
        }
    }

})



export const{settab}=tabslice.actions;
export default tabslice.reducer;