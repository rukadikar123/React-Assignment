import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileList() {
  const profiles = useSelector((state) => state.profiles);
  console.log(profiles);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 mt-28">
      {profiles?.map((item) => {
        return (
          <div
            key={item?.id}
            className="  shadow-md  p-2 flex flex-col gap-4 hover:shadow-xl transition"
          >
            <h1 className="text-lg"><span className="font-bold">Name:</span> {item?.name}</h1>
            <p className="text-lg"><span className="font-bold">Description:</span> {item?.description}</p>
            <div>
              <button
                onClick={() => navigate(`/profile/${item?.id}`)}
                className="border bg-blue-300 py-2 px-4 hover:bg-blue-400 font-semibold text-gray-900"
              >
                Profile details here
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProfileList;
