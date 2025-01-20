import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Map from "./Map.jsx";
import Mapmodel from "./Mapmodel.jsx";

function ProfileDetails() {
  const { id } = useParams();             // get Profile id from url params

  const [selectedProfile, setSelectedProfile] = useState(null);

  const Profiles = useSelector((state) => state.profiles);       //Retrieve profiles from the profileSlice of the Redux store
  console.log(Profiles);

  // Find and retrieve the profile object from the Profiles array based on the matching ID
  const profile = Profiles.find((item) => item.id === parseInt(id));    
  console.log(profile);

  if (!profile) {
    return <div>Profile not found</div>;
  }
  return (
    <div>
      {/* profile details section */}
      {
        <div className="border border-green-500 p-4 md:p-8 my-48 ">
          <div className="flex md:flex-row flex-col  gap-4 md:gap-40">
            <div className="flex flex-col gap-4">
              <h1 className="text-lg">
                <span className="font-bold">Name:</span> {profile?.name}
              </h1>
              <p className="text-lg">
                <span className="font-bold">description:</span>{" "}
                {profile.description}
              </p>
            </div>
            <p className="text-lg">
              <span className="font-bold">Address:</span> {profile?.address}
            </p>
          </div>
          <button
            className="border mt-6 rounded-md font-bold bg-blue-300 py-2 px-4 hover:bg-blue-400 text-gray-900"
            onClick={() => setSelectedProfile(profile)}
          >
            Click here to open map
          </button>
          {selectedProfile && (
            <Mapmodel
              profile={selectedProfile}
              onClose={() => setSelectedProfile(null)}
            />
          )}
        </div>
      }
    </div>
  );
}

export default ProfileDetails;
