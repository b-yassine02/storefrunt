/* eslint-disable no-loop-func */
import React, { useState } from "react";
import "./index.css";
import { FaRegHeart } from "react-icons/fa6";
import { useEffect } from "react";
import * as postClient from "../../Clients/postClient";
import { Post } from "../../Clients/postClient";
import * as userClient from "../../Clients/userClient";
import * as profileClient from "../../Clients/profileClient";
import { User } from "../../Clients/userClient";
import { ProfileType } from "../../Clients/profileClient";

interface PostProps {
  post_id: string;
  username: string;
  userImageUrl: string;
  postImageUrl: string;
  caption: string;
  likes: number;
  isLiked: boolean;
}

function Home() {
  const [homeData, setHomeData] = useState<PostProps[]>([
    {
      post_id: "",
      username: "",
      userImageUrl: "",
      postImageUrl: "",
      caption: "",
      likes: 0,
      isLiked: false,
    },
  ]);

  const [currentUserId, setCurrentUserId] = useState("");

  const fetchHome = async () => {
    // const user = await userClient.profile();
    // setCurrentUserId(user._id);
    setCurrentUserId("662715966380bcfe90f7ff62"); // comment this out before going
    const posts: Post[] = await postClient.findAllPosts();
    const users: User[] = await userClient.findAllUsers();
    const profiles: ProfileType[] = await profileClient.findAllProfiles();

    var homeData: PostProps[] = [];
    for (var post of posts) {
      const user = users.find((user) => user._id === post.user_id);
      const profile = profiles.find(
        (profile) => profile.user_id === post.user_id
      );
      console.log(post);
      console.log(user);
      console.log(profile);

      homeData.push({
        post_id: post._id,
        username: user?.username || "",
        userImageUrl: profile?.profile_pic || "",
        postImageUrl: post.post_image,
        caption: post.post_description,
        likes: post.post_likes.length,
        isLiked: post.post_likes.includes(user?._id || ""),
      });
    }
    setHomeData(homeData);
  };

  useEffect(() => {
    fetchHome();
  }, []);

  // Function to toggle like status and count
  const toggleLike = async (postId: string) => {
    const post = await postClient.findPostById(postId);
    if (post.likes.includes(currentUserId)) {
      await postClient.updatePost({
        ...post,
        likes: post.likes.filter((_id: string) => _id !== currentUserId),
      });
    } else {
      await postClient.updatePost({
        ...post,
        likes: [...post.likes, currentUserId],
      });
    }
  };

  return (
    <div>
      {homeData.map((data) => (
        <div key={data.post_id} className="container">
          <header className="post-header">
            <img
              src={data.userImageUrl}
              alt={`${data.username}'s profile`}
              className="user-image"
            />
            <h1 className="username">{data.username}</h1>
          </header>
          <div className="phone-app-demo">
            <img
              src={data.postImageUrl}
              alt={`Instagram post by ${data.username}`}
              className="post-image"
            />
          </div>
          <div className="post-actions">
            <button
              onClick={() => toggleLike(data.post_id)}
              className="form-btn like-button"
            >
              {data.isLiked ? "❤️" : <FaRegHeart className="fs-2" />} Like
            </button>
            <button className="form-btn comment-button">💬 Comment</button>
          </div>
          <div className="likes-count">
            {data.likes} {data.likes === 1 ? "like" : "likes"}
          </div>

          <div className="caption">
            <span className="username">{data.username}</span> {data.caption}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
