import React from 'react'
import {toast} from 'react-hot-toast'
import { settingapi } from '../apis'
import { apiConnector } from '../apiconnector';
import { setuser } from '../../slices/proflieSlice';

 

export function Updateprofile_picture(token,form) {

    
    
    const updateapi=settingapi.uploadprofile;

    return async (dispatch)=>{
        
        const id= toast.loading("Uploading..")
        try{
        const response  = await apiConnector("PUT",updateapi,form, {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        }
         
        )
              

      

        if(!response.data.success){
            throw new Error(response.data.message)


        }

        toast.success("Display Picture Updated Successfully");
        dispatch(setuser(response.data.data));

        }
       
        catch(error){

        console.log("UPDATE_DISPLAY_PICTURE_API API ERROR............", error)
        toast.error("Could Not Update Display Picture")


        }

        toast.dismiss(id);

    }

    
      
    

  
}
