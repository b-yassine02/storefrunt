import { Link } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import * as profileClient from "../../Clients/profileClient";
import { ProfileType } from "../../Clients/profileClient";
import { User } from "../../Clients/userClient";
import { Post } from "../../Clients/postClient";
import * as userClient from "../../Clients/userClient";
import * as postClient from "../../Clients/postClient";

function Profile() {
  const [currentUserId, setCurrentUserId] = useState("");
    // "662715966380bcfe90f7ff62"
    // "6627c1ea94b3a14d5416ae18"
//   );

  const [user, setUser] = useState<User>({
    _id: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
  });

  const [userPosts, setUserPosts] = useState<[Post]>([
    {
      _id: "",
      user_id: "",
      post_title: "",
      post_description: "",
      post_image: "",
      post_link: "",
      post_price: "",
      post_likes: [""],
      post_created: new Date(),
    },
  ]);

  const [profile, setProfile] = useState<ProfileType>({
    _id: "",
    user_id: "",
    profile_pic: "",
    description: "",
    followers: [""],
    following: [""],
  });

  const fetchProfile = async () => {
    const user = await userClient.profile();
    // const user = await userClient.findUserById({
    //   _id: "662715966380bcfe90f7ff62",
    // });
    setCurrentUserId(user._id);
    setUser(user);

    const posts = await postClient.findPostByUserId({
      user_id: user._id,
    });
    setUserPosts(posts);

    const profile = await profileClient.findProfileByUserId({
      user_id: user._id,
    });
    setProfile(profile);

    // const users = await userClient.findUserById({
    //     user_id: user._id,
    // });
    // setUser(users);
  };


  useEffect(() => {
    fetchProfile();
  }, []);

  const navigate = useNavigate();
  const editprofile = async () => {
    navigate("/Main/Profile/Edit");
  };

  return (
    <div className="wd-profile">
      <div className="wd-profile-top">
        <div className="wd-profile-circle">
          <img src={`images/${profile.profile_pic}`} alt="profile" />
        </div>
        <div className="wd-profile-info">
          <div className="info_1">
            <h5 style={{ paddingTop: "20px" }}>{user.username}</h5>
            <button
              type="button"
              onClick={editprofile}
              className="edit-profile"
            >
              Edit Profile
            </button>
            <button type="button" className="ad-tools">
              Ad Tools
            </button>
            <Link to={`/Main/Admin`}>
              <button type="button" className="admin">
                Admin
              </button>
            </Link>
            <Link to={`/users/SignIn`}>
              <button type="button" className="sign-out">
                Sign Out
              </button>
            </Link>
          </div>
          <div className="info_2">
            <span style={{ display: "flex" }}>
              <p className="post_num">{userPosts.length}</p>
              <p className="post_info">posts</p>
            </span>
            <span style={{ display: "flex" }}>
              <p className="followers_num">{profile.followers.length}</p>
              <button className="followers_info">followers</button>
            </span>
            <span style={{ display: "flex" }}>
              <p className="following_num">{profile.following.length}</p>
              <p className="following_info">following</p>
            </span>
          </div>
          <div className="info_3">
            <div className="other_info">{profile.description}</div>
          </div>
        </div>
      </div>
      <hr className="mx-auto" style={{ width: "70%" }} />
      <div className="wd-profile-bottom">
        <div className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {userPosts.map((post) => (
              <div
                key={post._id}
                className="col"
                style={{ width: 280, display: "flex" }}
              >
                <div className="card">
                  <h5>{post.post_title}</h5>
                  <img
                    src={post.post_image}
                    className="card-img-top"
                    alt="card-img"
                  ></img>
                  <div className="card-body"></div>
                  <a href={post.post_link} target="_blank" rel="noreferrer">
                    Buy Me Here!
                  </a>
                  <p>{post.post_description}</p>
                  <p>${post.post_price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
