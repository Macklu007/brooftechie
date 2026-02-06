import { apiConnector } from "../apiconnector";
import {subSectionapi} from"../apis"

export async function Createsubsection(token,formdata){

    try{
        const addapi = subSectionapi.addsubsection
        console.log(addapi,"api");

        const result= await apiConnector("Post",addapi,formdata,{ Authorization: `Bearer ${token}`})
        return result.data.data
    }
    catch(err){
        console.log(err)
    }


}


export async function UpdateSubsection (token,formdata){
    try{
        const updateapi= subSectionapi.updatesubsection
        const result=await apiConnector("POST",updateapi,formdata,{ Authorization: `Bearer ${token}`})

        return result.data.data
    }
    catch(err){
        console.log(err);
    }

}

export async function Deletesubsection(token,formdata){
    try{
        const result=await apiConnector("POST",subSectionapi.deletesubsection,formdata,{Authorization: `Bearer ${token}`})
        
        return result
    }
    catch(err){
        console.log(err)
    }
}