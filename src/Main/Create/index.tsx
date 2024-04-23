import "./index.css";
import { Post } from "../../Clients/postClient";
import * as postClient from "../../Clients/postClient";
import { useEffect } from "react";
import * as userClient from "../../Clients/userClient";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddItem() {
  const [currentUserId, setCurrentUserId] = useState(
    "662715966380bcfe90f7ff62"
  );

  const [post, setPost] = useState<Post>({
    _id: "",
    user_id: "",
    post_title: "",
    post_description: "",
    post_image: "",
    post_link: "",
    post_price: "",
    post_likes: [],
    post_created: new Date(),
  });

  const fetchProfile = async () => {
    const user = await userClient.profile();
    // const user = await userClient.findUserById({
    //   _id: "662715966380bcfe90f7ff62",
    // });
    setCurrentUserId(user._id);
    setPost({ ...post, user_id: user._id });
  };

  const navigate = useNavigate();
  const onSave = async () => {
    console.log("I got here...");
    const response = await postClient.createPost(post);
    console.log(response);
    navigate("/Main/Profile");
  };

  const onCancel = () => {
    navigate("/Main/Profile");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="background-container container-fluid">
      <h1 className="header text-6xl font-black text-center text-slate-900 mb-20">
        Add a Post
      </h1>
      <hr className="mx-auto" style={{ width: "60%", margin: "2%" }} />
      <form className="form container-fluid">
        <br />
        <p>Give your post a title </p>
        <input
          className="form-input"
          value={post.post_title}
          placeholder="post title"
          onChange={(e) => setPost({ ...post, post_title: e.target.value })}
        ></input>
        <br />
        <br />
        <p>Add your link from any store </p>
        <input
          className="form-input"
          value={post.post_link}
          placeholder="store link"
          onChange={(e) => setPost({ ...post, post_link: e.target.value })}
        ></input>
        <br />
        <br />
        <p>Insert a link to an image of the product </p>
        <input
          className="form-input"
          placeholder="image link"
          value={post.post_image}
          onChange={(e) => setPost({ ...post, post_image: e.target.value })}
        ></input>
        <br />
        <br />
        <p>Give your post a description </p>
        <input
          className="form-input"
          placeholder="description"
          value={post.post_description}
          onChange={(e) =>
            setPost({ ...post, post_description: e.target.value })
          }
        ></input>
        <br />
        <br />
        <p>Give your product a price </p>
        <input
          className="form-input"
          placeholder="$10"
          value={post.post_price}
          onChange={(e) => setPost({ ...post, post_price: e.target.value })}
        ></input>
        <br />
        <br />
        <button className="submit-buttons" onClick={onSave}>
          Save
        </button>
        <button className="submit-buttons" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddItem;
