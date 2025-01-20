import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { useDispatch, } from 'react-redux';
import { getSearchData,  } from '../redux/ProfileSlice';

function Navbar({user , setUser}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);   //initialize state variable
  const [searchData, setSearchData]=useState("")           //initialize state variable

  
  const navigate=useNavigate()
  const dispatch=useDispatch()

  // handle form submit
  const handleSubmit=(e)=>{
    e.preventDefault()

    // Redirect to filtered data page and dispatch search data action if search query is present
    if(searchData){
        dispatch(getSearchData(searchData))
    navigate("/fitered-data")
    }
    setSearchData("")       //make searchData state var empty
  }



  return (
    <div>
         <nav className="fixed top-0 left-0 w-full bg-white shadow-md">
          <div className="flex items-start  top-4 justify-between mx-4 md:mx-40 my-6">
            <Link
              className="font-semibold text-lg md:text-xl cursor-pointer hover:text-gray-500"
              to="/"
            >
              Home
            </Link>

             {/* Form section */}
            <form onSubmit={(e)=>handleSubmit(e)} className="flex items-center">
              <input
                type="text"
                className=" outline-none border text-sm py-1 w-[30vw] border-gray-400 px-2 rounded-l-lg"
                placeholder="Search Profile"
                value={searchData}
                onChange={(e)=>setSearchData(e.target.value)}

              />
              <button type="submit" className="border rounded-r-lg p-1.5 border-gray-400">
                <CiSearch />
              </button>
            </form>
            <div className="h-full flex flex-col gap-2 w-[15vw] md:w-[10vw] relative items-center">
              <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="">
                {" "}
                <IoIosMenu size={30} />
              </div>
              {isMenuOpen && (
                <div className="flex flex-col gap-1">
                  <Link
                    className={`font-semibold text-xs md:text-sm  cursor-pointer hover:text-gray-500`}
                    to="/admin"
                    onClick={() =>
                      !user && alert("please login to access admin")
                    }
                  >
                    <span className="md:block hidden">Admin panel</span><span className="md:hidden block">Admin</span>
                  </Link>
                  {!user && (
                    <Link
                      className={`font-semibold text-xs md:text-sm  ${
                        user ? "hidden" : "block"
                      } cursor-pointer hover:text-gray-500`}
                      to={`${!user && "/login"}`}
                    >
                      Admin Login
                    </Link>
                  )}
                  <Link
                    onClick={() => setUser()}
                    className={`font-semibold text-xs  md:text-sm cursor-pointer  hover:text-gray-500 ${
                      user ? "block" : "hidden"
                    }`}
                    to="/login"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar