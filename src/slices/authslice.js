import { createSlice } from "@reduxjs/toolkit"

 const initialState={
    signupdata:null,
    loading:false,
    token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null
 }
const authslice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setToken(state,action){
            state.token=action.payload;

            

        }
        ,
        setsignupdata(state,action){
            state.signupdata=action.payload;

            
        },

        setloading(state,action){
            state.loading=action.payload
        }
    }

});


 export const{setToken,setloading,setsignupdata}=authslice.actions;
 
 export default authslice.reducer;