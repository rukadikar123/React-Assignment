import { createSlice } from "@reduxjs/toolkit";
import {initialProfiles} from "../mockData.js"

const initialState={
    profiles:JSON.parse(localStorage.getItem('profiles')) || initialProfiles,
    selectedProfile: null,

}

const ProfileSlice=createSlice({
    name:"Profiles",
    initialState,
    reducers:{
        
    }

})




export default ProfileSlice.reducer