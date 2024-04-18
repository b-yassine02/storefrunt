import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Create from "./Create";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Explore from "./Explore";
import Other from "./Other";

function Main() {
    return (
        <div style={{ height: "100%"}}>
            <div className="d-flex" style={{ display: 'flex', height: '100%' }}>
                <div>
                    <Navigation />
                </div>
                <div style={{ flexGrow: 1, marginLeft: 280 }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Profile" />} />
                        <Route path="Profile/*" element={<Profile />} />
                        <Route path="Home/*" element={<Home />} />
                        <Route path="Search/*" element={<Search />} />
                        <Route path="Create/*" element={<Create />} />
                        <Route path="Explore/*" element={<Explore />} />
                        <Route path="Other/*" element={<Other />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
export default Main;