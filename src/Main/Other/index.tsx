import { Link } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { User } from "../../Clients/userClient";
import { useEffect, useState } from "react";
import * as userClient from "../../Clients/userClient";
import { Post } from "../../Clients/postClient";
import * as postClient from "../../Clients/postClient";
import { ProfileType } from "../../Clients/profileClient";
import * as profileClient from "../../Clients/profileClient";

function Other({other} : {other: String}) {

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
        const posts = await postClient.findPostByUserId(
            {user_id: other}
        )
        setUserPosts(posts);

        const profile = await profileClient.findProfileByUserId(
            {user_id: other}
        );
        setProfile(profile);

        const user = await userClient.findUserById(
            {user_id: other}
        )
        setUser(user);
    }

    useEffect(() => {
        fetchProfile();
    }, []);

  return (
    <div className="wd-profile">
      <div className="wd-profile-top">
        <div className="wd-profile-circle">
          <img src="/images/duckie.jpg" alt="profile" />
        </div>
        <div className="wd-profile-info">
          <div className="info_1">
            <h5 style={{ paddingTop: "20px" }}>{user.username}</h5>
            <button type="button" className="following">
              Following
            </button>
            <button type="button" className="message">
              Message
            </button>
            <button type="button" className="add-friends">
              Add?
            </button>
          </div>
          <div className="info_2">
            <span style={{ display: "flex" }}>
              <p className="post_num">{userPosts.length}</p>
              <p className="post_info">posts</p>
            </span>
            <span style={{ display: "flex" }}>
              <p className="followers_num">{profile?.followers?.length}</p>
              <p className="followers_info">followers</p>
            </span>
            <span style={{ display: "flex" }}>
              <p className="following_num">{profile?.following?.length}</p>
              <p className="following_info">following</p>
            </span>
          </div>
          <div className="info_3">
            <div className="other_info">{profile?.description}</div>
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
export default Other;
