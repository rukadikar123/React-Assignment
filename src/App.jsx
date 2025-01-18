import { BrowserRouter, Route, Link, Routes, useNavigate } from "react-router-dom";
import ProfileList from "./components/ProfileList.jsx";
import Admin from "./components/Admin.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";
import { CiSearch } from "react-icons/ci";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { useState } from "react";

function App() {
  const [user, setUser]=useState(null)


  return (
    <>
      <BrowserRouter>
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md">
          <div className="flex items-center  top-4 justify-between mx-60 my-8">
            <Link
              className="font-semibold text-xl cursor-pointer hover:text-gray-500"
              to="/"
            >
              Home
            </Link>
            <div className="flex items-center">
              <input
                type="text"
                className=" outline-none border text-sm py-1 w-[30vw] border-gray-400 px-2 rounded-l-lg"
                placeholder="Search Profile"
              />
              <button className="border rounded-r-lg p-1.5 border-gray-400">
                <CiSearch />
              </button>
            </div>
            <Link
              className={`font-semibold text-xl ${user ? 'hidden': 'block' } cursor-pointer hover:text-gray-500`}
              to="/login" 
              onClick={()=> !user && alert("please login to access admin")}
          
            >
              Admin Login
            </Link>
            <Link
              onClick={()=> setUser()}
              className={`font-semibold  text-xl cursor-pointer hover:text-gray-500 ${user ? 'block' : 'hidden'}`}
              to="/login" 
            >
              Logout
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
          <Route path="/admin" element={<Admin user={user}/>} />
          <Route path="/login" element={<Login setUser={setUser}/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
