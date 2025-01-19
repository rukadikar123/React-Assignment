import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import ProfileList from "./components/ProfileList.jsx";
import Admin from "./components/Admin.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";

import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import { useState } from "react";
import Footer from "./Footer.jsx";
import FilteredData from "./components/FilteredData.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [user, setUser] = useState(null);
  


  return (
    <>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        <Footer />
        <Routes>
          <Route path="/" element={<ProfileList />} />
          <Route path="/profile/:id" element={<ProfileDetails />} />
          <Route path="/admin" element={<Admin user={user} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/fitered-data" element={<FilteredData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
