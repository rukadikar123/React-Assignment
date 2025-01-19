import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileList() {
  const profiles = useSelector((state) => state.profiles);
  console.log(profiles);

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 my-32 md:grid-cols-3 gap-4">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg">{profile.name}</h3>
              <p>{profile.description}</p>
              <p className="text-gray-500">{profile.address}</p>
              <div className="mt-4 flex justify-between">
               
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => navigate(`/profile/${profile.id}`)}
                >
                  View Profile
                </button>
                
              </div>
            </div>
          ))}
        </div>
  );
}

export default ProfileList;
