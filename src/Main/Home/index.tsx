import React, { useState } from 'react';
import './index.css';
import { FaRegHeart } from "react-icons/fa6";

// Interface for the InstagramPost properties
interface PostProps {
  username: string;
  userImageUrl: string;
  postImageUrl: string;
  caption: string;
}

// InstagramPost component to display a social media post with like and comment features
const InstagramPost: React.FC<PostProps> = ({ username, userImageUrl, postImageUrl, caption }) => {
  // State for tracking likes and whether the post is liked
  const [likes, setLikes] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  // Function to toggle like status and count
  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  return (
    <body>
  <div className="container">
    <header className="post-header">
      <img src={userImageUrl} alt={`${username}'s profile`} className="user-image" />
      <h1 className="username">{username}</h1>
    </header>
    <div className="phone-app-demo">
      <img src={postImageUrl} alt={`Instagram post by ${username}`} className="post-image" />
    </div>
    <div className="post-actions">
    <button onClick={toggleLike} className="form-btn like-button">
  {isLiked ? '❤️' : <FaRegHeart className="fs-2"/>} Like
</button>
      <button className="form-btn comment-button">💬 Comment</button>
    </div>
    <div className="likes-count">{likes} {likes === 1 ? 'like' : 'likes'}</div>
    <div className="caption">
      <span className="username">{username}</span> {caption}
    </div>
  </div>
</body>

  );
};

export default InstagramPost;
