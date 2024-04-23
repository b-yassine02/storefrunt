import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./index.css";

function View() {
    return (
        <div>
        <Link to="../../users/SignIn">
          <div className="container">
            <header className="post-header">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Hans-Zimmer-profile.jpg"
                alt="View"
                className="user-image"
              />
              <h1 className="username">HansZimmer</h1>
            </header>
            <div className="phone-app-demo">
              <img
                src="https://www.quayaustralia.com/cdn/shop/files/Quay_VibeCheck_BlackBlackPol_Front_694905f5-7990-4516-8169-dc14b645c1e8.jpg?v=1713564585&width=2000"
                alt="sunglass"
                className="post-image"
              />
            </div>
            <div className="post-actions">
              <button
                className="form-btn like-button">
                <FaRegHeart className="fs-2" /> Like
              </button>
              <button className="form-btn comment-button">💬 Comment</button>
            </div>
            <div className="likes-count">
              1 like
            </div>
  
            <div className="caption">
              <span className="username">HansZimmer</span> 
            </div>
          </div>
          </Link>
      </div>
    )
}
export default View;