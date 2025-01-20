import { createSlice } from "@reduxjs/toolkit";
import {initialProfiles} from "../mockData.js"

// Define the initial state of the profiles slice
const initialState={
    profiles:JSON.parse(localStorage.getItem('profiles')) || initialProfiles,  // Retrieve profiles from local storage or use the initial profiles data
    selectedProfile: null,
    setSearch:"",            // Initialize the search query to an empty string
    FilteredData:[]         // Initialize the filtered data array to empty
}

// Create a slice for managing profiles data
const ProfileSlice=createSlice({
    name:"Profiles",
    initialState,

    // Reducers for managing the slice state
    reducers:{
        // Add a new profile to the state
        addProfile:(state, action)=>{
            state.profiles.push(action.payload)
            localStorage.setItem("profiles", JSON.stringify(state.profiles))
        },
        // Edit an existing profile in the state
        editProfile:(state,action)=>{
            const index=state.profiles.findIndex(item => item.id === action.payload.id)

            if(index>0){
                state.profiles[index]=action.payload
                localStorage.setItem("profiles", JSON.stringify(state.profiles))
            }
        },
        // Delete a profile from the state
        deleteProfile:(state, action)=>{
            state.profiles=state.profiles.filter(item => item.id !== action.payload)
            localStorage.setItem("profiles", JSON.stringify(state.profiles))
        },
        // Select a profile in the state
        selectedProfile:(state, action)=>{
            state.selectedProfile=action.payload
        },
        // Get search data from the state
        getSearchData:(state, action)=>{
            state.setSearch=action.payload
            if(state.setSearch){
                state.FilteredData=state.profiles.filter((profile)=> profile.name.toLowerCase().includes(state.setSearch.toLocaleLowerCase()))
            }
            
        },
     
    }

})

// Export actions from the ProfileSlice
export const {addProfile,editProfile,deleteProfile,selectedProfile, getSearchData}=ProfileSlice.actions;

// Export the reducer function from the ProfileSlice
export default ProfileSlice.reducer;