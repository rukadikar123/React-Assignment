import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfile, deleteProfile, editProfile } from "../redux/ProfileSlice";
import { useNavigate } from "react-router-dom";

function Admin({user}) {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles);

  const [isEditing, setIsEditing] = useState(false);
  const [currentProfileId, setCurrentProfileId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    description: "",
    address: "",
    lat: "",
    lng: "",
  });

  const navigate=useNavigate()

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle add profile
  const handleAdd = () => {
    if (!form.name || !form.address || !form.lat || !form.lng) {
      alert("Please fill in all required fields.");
      return;
    }
    const newProfile = {
      id: Date.now(),
      ...form,
      lat: parseFloat(form.lat),
      lng: parseFloat(form.lng),
    };
    dispatch(addProfile(newProfile));
    resetForm();
  };

  // Handle edit profile
  const handleEdit = () => {
    if (!form.name || !form.address || !form.lat || !form.lng) {
      alert("Please fill in all required fields.");
      return;
    }
    const updatedProfile = {
      id: currentProfileId,
      ...form,
      lat: parseFloat(form.lat),
      lng: parseFloat(form.lng),
    };
    dispatch(editProfile(updatedProfile));
    resetForm();
    setIsEditing(false);
  };

  // Handle delete profile
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      dispatch(deleteProfile(id));
    }
  };

  // Handle edit button click
  const handleEditClick = (profile) => {
    setForm({
      name: profile.name,
      description: profile.description,
      address: profile.address,
      lat: profile.lat.toString(),
      lng: profile.lng.toString(),
    });
    setCurrentProfileId(profile.id);
    setIsEditing(true);
  };

  // Reset the form
  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      address: "",
      lat: "",
      lng: "",
    });
    setCurrentProfileId(null);
    setIsEditing(false);
  };

  return (
    <>
      {
        user && <div className="p-8 mt-20">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

        {/* Form Section */}
        <div className="border rounded-lg p-4 mb-6">
          <h2 className="text-xl font-bold mb-2">
            {isEditing ? "Edit Profile" : "Add New Profile"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border p-2 rounded"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            <input
              className="border p-2 rounded"
              type="text"
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
            />
            <input
              className="border p-2 rounded"
              type="text"
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />
            <input
              className="border p-2 rounded"
              type="text"
              name="lat"
              placeholder="Latitude"
              value={form.lat}
              onChange={handleChange}
            />
            <input
              className="border p-2 rounded"
              type="text"
              name="lng"
              placeholder="Longitude"
              value={form.lng}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            {isEditing ? (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                onClick={handleEdit}
              >
                Update Profile
              </button>
            ) : (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                onClick={handleAdd}
              >
                Add Profile
              </button>
            )}
            {isEditing && (
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={resetForm}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
        {/* Profiles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  onClick={() => handleEditClick(profile)}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => navigate(`/profile/${profile.id}`)}
                >
                  View Profile
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  onClick={() => handleDelete(profile.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      }
    </>
  );
}

export default Admin;
