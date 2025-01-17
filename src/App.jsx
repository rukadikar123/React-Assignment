
import { BrowserRouter,Route, Link, Routes } from "react-router-dom";
import ProfileList from "./components/ProfileList.jsx";
import Admin from "./components/Admin.jsx";
import ProfileDetails from "./components/ProfileDetails.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="flex items-center justify-between mx-60 my-4">
          <Link  to="/">Home</Link>
          <Link to="/admin">Admin panel</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProfileList/>} />
          <Route path="/profile/:id" element={<ProfileDetails/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
