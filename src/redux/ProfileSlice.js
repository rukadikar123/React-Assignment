import { createSlice } from "@reduxjs/toolkit";
import {initialProfiles} from "../mockData.js"

const initialState={
    profiles:JSON.parse(localStorage.getItem('profiles')) || initialProfiles,
    selectedProfile: null,
    setSearch:"",
    FilteredData:[]
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
        },
        getSearchData:(state, action)=>{
            state.setSearch=action.payload
            if(state.setSearch){
                state.FilteredData=state.profiles.filter((profile)=> profile.name.toLowerCase().includes(state.setSearch.toLocaleLowerCase()))
            }
            
        },
     
    }

})


export const {addProfile,editProfile,deleteProfile,selectedProfile, getSearchData}=ProfileSlice.actions;

export default ProfileSlice.reducer;