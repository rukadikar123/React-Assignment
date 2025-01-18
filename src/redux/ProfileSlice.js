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
        addProfile:(state, action)=>{
            state.profiles.push(action.payload)
            localStorage.setItem("profiles", JSON.stringify(state.profiles))
        },
        editProfile:(state,action)=>{
            const index=state.profiles.findIndex(item => item.id === action.payload.id)

            if(index>0){
                state.profiles[index]=action.payload
                localStorage.setItem("profiles", JSON.stringify(state.profiles))
            }
        },
        deleteProfile:(state, action)=>{
            state.profiles=state.profiles.filter(item => item.id !== action.payload.id)
            localStorage.setItem("profiles", JSON.stringify(state.profiles))
        },
        selectedProfile:(state, action)=>{
            state.selectedProfile=action.payload
        }
    }

})


export const {addProfile,editProfile,deleteProfile,selectedProfile}=ProfileSlice.actions;

export default ProfileSlice.reducer;