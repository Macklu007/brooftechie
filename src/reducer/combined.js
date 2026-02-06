import { combineReducers } from "@reduxjs/toolkit"
import authslice from"../slices/authslice";
import ProfileSlice from"../slices/proflieSlice"
import Cartslice from"../slices/cartslice";
import  tabslice  from "../slices/tabslice";
import courseSlice from"../slices/courseslice";
import viewCourseReducer from "../slices/viewCourseSlice"




const rootReducer=combineReducers({
 auth:authslice,
 profile:ProfileSlice,
 cart:Cartslice,
 tab:tabslice,
 course:courseSlice,
 viewCourse: viewCourseReducer,


})


export default rootReducer;