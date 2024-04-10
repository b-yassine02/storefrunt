import { Routes, Route, Link, Navigate, useLocation } from "react-router-dom";
import User from "./User";

function Profile() {
    const { pathname } = useLocation();
    return (
        <div>
            <h1>Profile</h1>
            <Link to="/Profile/User"
                className={pathname.includes("User") ? "active" : ""}>User
            </Link>
            <Routes>
                <Route path="/" element={<Navigate to="User"/>}/>
                <Route path="/User/*" element={<User />} />
            </Routes>
        </div>
    );
}
export default Profile;