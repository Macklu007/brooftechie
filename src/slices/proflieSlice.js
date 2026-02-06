import { createSlice } from "@reduxjs/toolkit";
const initailState={
   user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")) : null,
   loading:false


}
const ProfileSlice=createSlice({
    name:"profile",
    initialState:initailState,
    reducers:{
        setuser(state,action){
            state.user=action.payload

        },
        
        setloading(state,action){
            state.loading=action.payload
        }

    }

});

export const{setuser,setloading}=ProfileSlice.actions

export default ProfileSlice.reducer