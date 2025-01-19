import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="h-full flex  items-center justify-center mt-44 w-full">
        <div className="border-2 rounded-md border-red-300 h-full py-4 w-[65%] mx-6 md:mx-0 md:w-[25vw] flex flex-col bg-slate-100 text-black items-start gap-6 justify-start px-6 ">
          <h1 className="font-bold  text-[25px] mt-2">Sign Up</h1>
          <div>
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
              <input
                className="bg-transparent   outline-none border-2 rounded-3xl my-3 px-4 py-2 w-full md:w-[20vw] border-pink-400"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="bg-transparent outline-none border-2 rounded-3xl my-3 px-4 py-2 w-full md:w-[20vw] border-pink-400"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="bg-pink-500 rounded-2xl p-2 mt-6 font-semibold"
              >
                Sign Up
              </button>
              <p className="text-center mt-8">
                Do you have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="cursor-pointer"
                >
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
