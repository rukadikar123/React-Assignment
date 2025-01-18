import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Map from "./Map.jsx";
import Mapmodel from "./Mapmodel.jsx";

function ProfileDetails() {
  const { id } = useParams();

  const [selectedProfile, setSelectedProfile] = useState(null);

  const Profiles = useSelector((state) => state.profiles);
  console.log(Profiles);

  const profile = Profiles.find((item) => item.id === parseInt(id));
  console.log(profile);

  if (!profile) {
    return <div>Profile not found</div>;
  }
  return (
    <div>
      {
        <div className="border border-green-500 p-4 ">
          <div className="flex gap-40">
            <div className="flex flex-col gap-4">
              <h1>
                <span className="font-bold">Name:</span> {profile?.name}
              </h1>
              <p>
                <span className="font-bold">description:</span>{" "}
                {profile.description}
              </p>
            </div>
            <p>
              <span className="font-bold">Address:</span> {profile?.address}
            </p>
          </div>
          <button
            className="border mt-6 font-bold bg-blue-300 py-2 px-4 hover:bg-blue-400 text-gray-900"
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
