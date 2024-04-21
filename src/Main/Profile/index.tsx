import { Link } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
    // i'm just setting this as example so please change to whatever works
    const [user, setUser] = useState({ username: "min_nie", firstname: "Minnie", lastname: "Pooh", 
        email: "minniepooh02@gmail.com", password: "min123", role: "user"
    });
    const [profile, setProfile] = useState({ profile_pic: "minnie.jpeg",
        description: "I am a corgi, woof woof", followers: [280], following: [180]
    });

    const navigate = useNavigate();
    const editprofile = async () => {
        navigate("/Main/Profile/Edit");
    }

    return (
        <div className="wd-profile">
            <div className="wd-profile-top">
                <div className="wd-profile-circle">
                    <img src="/images/duckie.jpg" alt="profile" />
                </div>
                <div className="wd-profile-info">
                    <div className="info_1">
                        <h5 style={{ paddingTop: '20px'}}>Storefrunt</h5>
                        <button type="button" onClick={editprofile} className="edit-profile">Edit Profile</button>
                        <button type="button" className="ad-tools">Ad Tools</button>
                        <button type="button" className="admin">Admin</button>
                    </div>
                    <div className="info_2">
                        <span style={{  display: 'flex' }}>
                            <p className="post_num">0</p>
                            <p className="post_info">posts</p>
                        </span>
                        <span style={{  display: 'flex' }}>
                            <p className="followers_num">{profile.followers}</p>
                            <button className="followers_info">followers</button>
                        </span>
                        <span style={{  display: 'flex' }}>
                            <p className="following_num">{profile.following}</p>
                            <p className="following_info">following</p>
                        </span>
                    </div>
                    <div className="info_3">
                        <div className="other_info">{profile.description}</div>
                    </div>
                </div> 
            </div> 
            <hr className="mx-auto" style={{ width: '70%', }}/>
            {/* This should be the list of links or posts */}
            <div className="wd-profile-bottom">
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        <div className="col" style={{ width: 280, display: "flex" }}>
                            <div className="card">
                                <img src={`images/${profile.profile_pic}`} className="card-img-top" alt="card-img"></img>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ width: 280, display: "flex" }}>
                            <div className="card">
                                <img src='images/P11.jpeg' className="card-img-top" alt="card-img"></img>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>                        
                        <div className="col" style={{ width: 280, display: "flex" }}>
                            <div className="card">
                                <img src='images/P10.jpeg' className="card-img-top" alt="card-img"></img>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>                        
                        <div className="col" style={{ width: 280, display: "flex" }}>
                            <div className="card">
                                <img src='images/P12.jpeg' className="card-img-top" alt="card-img"></img>
                                <div className="card-body">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;