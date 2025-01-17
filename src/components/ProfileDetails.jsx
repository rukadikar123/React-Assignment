import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Map from './Map';

function ProfileDetails() {
    const {id}=useParams();
    console.log(id);
    
    const Profiles=useSelector(state => state.profiles)
    console.log(Profiles);
    
    const profile=Profiles.find((item)=> item.id === parseInt(id))
    console.log(profile);
    
    
    if(!profile){
        return <div>Profile not found</div>
    }
  return (
    <div>
        {
            <div>
                <h1>{profile?.name}</h1>
                <p>{profile.description}</p>
                <h3>Map view</h3>
                <Map profile={profile} />
            </div>
        }
    </div>
  )
}

export default ProfileDetails