import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ProfileList() {
  const profiles = useSelector((state) => state.profiles);
  console.log(profiles);

  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10">
      {profiles?.map((item) => {
        return <div key={item?.id} className=" border-green-600 shadow-md border p-2 flex flex-col gap-4 hover:shadow-xl transition">
                        <h1>Name: {item?.name}</h1>
                        <p>Description: {item?.description}</p>
                        <div><button onClick={()=> navigate(`/profile/${item?.id}`)} className="border bg-blue-300 py-2 px-4 hover:bg-blue-400 text-gray-900">View on map</button></div>
                </div>;
      })}
    </div>
  );
}

export default ProfileList;
