import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ProfileType } from "../../../Clients/profileClient";
import { User } from "../../../Clients/userClient";
import * as userClient from "../../../Clients/userClient";
import * as profileClient from "../../../Clients/profileClient";

function EditProfile() {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });

  const [profile, setProfile] = useState<ProfileType>({
    _id: "",
    user_id: "",
    profile_pic: "",
    description: "",
    followers: [""],
    following: [""],
  });

  const fetchProfile = async () => {
    const user = await userClient.profile(); // this can replace lines 34-36
    // const user = await userClient.findUserById({
    //   _id: "662715966380bcfe90f7ff62",
    // });
    setUser(user);

    const profile = await profileClient.findProfileByUserId({
      user_id: user._id,
    });
    setProfile(profile);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const save = async () => {
    await userClient.updateUser(user);
    await profileClient.updateProfile(profile);
    navigate("/Main/Profile");
  };

  const cancel = async () => {
    navigate("/Main/Profile");
  };

  return (
    <div>
      {/* Not sure how you want to add the edit profile picture */}
      {user && (
        <div className="heading-edit">
          <h3>Edit Profile</h3>
          <div className="pfp-edit">
            <div className="wd-profile-circle-edit">
              <img src="/images/duckie.jpg" alt="profile" />
            </div>
            <div className="names-edit">
              <b className="username-edit">{user.username}</b>
              <br />
              <div className="fullname-edit">
                {user.firstname}&nbsp;{user.lastname}
              </div>
            </div>
            <span className="float-end">
              <div className="changepic-edit">
                <button>
                  <b>Change photo</b>
                </button>
              </div>
            </span>
          </div>
          <div className="editName-edit">
            <h6 className="firstname-edit">First Name</h6>
            <input
              className="name-input"
              type="text"
              value={user.firstname}
              onChange={(e) => setUser({ ...user, firstname: e.target.value })}
            />
            <br />
            <br />
            <h6 className="lastname-edit">Last Name</h6>
            <input
              className="name-input"
              type="text"
              value={user.lastname}
              onChange={(e) => setUser({ ...user, lastname: e.target.value })}
            />
            <br />
            <br />
            <h6>Username</h6>
            <input
              className="name-input"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <br />
            <br />
            <h6>Password</h6>
            <input
              className="name-input"
              type="text"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <br />
          <div className="bio-edit">
            <h4>Bio</h4>
            <textarea
              placeholder="Bio"
              value={profile.description}
              onChange={(e) =>
                setProfile({ ...profile, description: e.target.value })
              }
            >
              {profile.description}
            </textarea>
          </div>
          <br />
          <div className="submit-edit">
            <button onClick={save}>
              <b>Submit</b>
            </button>
            <button onClick={cancel}>
              <b>Cancel</b>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default EditProfile;
