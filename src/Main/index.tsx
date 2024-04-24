import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Create from "./Create";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Explore from "./Explore";
import Other from "./Other";
import Admin from "./Admin";
import EditProfile from "./Profile/Edit";
import View from "./View";
import { User } from "../Clients/userClient";
import { useState } from "react";

function Main() {
  const [other, setOther] = useState<User>(
    {
      _id: "",
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      role: "",
    }
  );

  return (
    <div style={{ height: "100%" }}>
      <div className="d-flex" style={{ display: "flex", height: "100%" }}>
        <div>
          <Navigation />
        </div>
        <div style={{ flexGrow: 1, marginLeft: 280 }}>
          <Routes>
            <Route path="/" element={<Navigate to="View" />} />
            <Route path="Profile/*" element={<Profile />} />
            <Route path="Home/*" element={<Home />} />
            <Route path="Search/*" element={<Search 
              setOther={setOther}/>} />
            <Route path="Create/*" element={<Create />} />
            <Route path="Admin/*" element={<Admin />} />
            <Route path="Other/*" element={<Other 
              other={other}/>} />
            <Route path="View/*" element={<View />} />
            {/* Other is what the user will see of other's profile if they click on it*/}
            <Route path="Profile/Edit/*" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Main;
