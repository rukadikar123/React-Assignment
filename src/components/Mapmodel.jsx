import React from "react";
import Map from "./Map.jsx";

function Mapmodel({ profile, onClose }) {
  return (
    <div>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 md:h-[80vh] p-4 relative">
          <button
            className="absolute top-2 right-2 text-red-500 text-lg"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-xl font-bold mb-4">{profile?.name}</h2>
          <p className="mb-4">{profile?.description}</p>
          <Map profile={profile} />
        </div>
      </div>
    </div>
  );
}

export default Mapmodel;
