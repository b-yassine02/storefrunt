import { FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa6";

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
              <button className="form-btn"> <FaRegComment className="fs-2" /> Comment</button>
            </div>
            <div className="likes-count">
              1 like
            </div>
  
            <div className="caption">
              <span className="username">karen</span> 
            </div>
          </div>
          <div className="container">
            <header className="post-header">
              <img
                src="https://i.pinimg.com/474x/21/8a/a5/218aa5d94ada5bf828fcf2bd386bf234.jpg"
                alt="View"
                className="user-image"
              />
              <h1 className="username">karen</h1>
            </header>
            <div className="phone-app-demo">
              <img
                src="https://colorwowhair.com/cdn/shop/products/CW535_CultFavorite_295ml_2048x2048_ce524510-1ff1-4ce8-b8c4-49c3d5346fcf.jpg?v=1666362520"
                alt="hairspray"
                className="post-image"
              />
            </div>
            <div className="post-actions">
              <button
                className="form-btn like-button">
                <FaRegHeart className="fs-2" /> Like
              </button>
              <button className="form-btn"> <FaRegComment className="fs-2" /> Comment</button>
            </div>
            <div className="likes-count">
              4 likes
            </div>
  
            <div className="caption">
              <span className="username">min_nie</span> 
            </div>
          </div>
          <div className="container">
            <header className="post-header">
              <img
                src="https://i.etsystatic.com/25976155/r/il/eda8ce/3387908316/il_570xN.3387908316_9er3.jpg"
                alt="View"
                className="user-image"
              />
              <h1 className="username">HansZimmer</h1>
            </header>
            <div className="phone-app-demo">
              <img
                src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg"
                alt="shoes"
                className="post-image"
              />
            </div>
            <div className="post-actions">
              <button
                className="form-btn like-button">
                <FaRegHeart className="fs-2" /> Like
              </button>
              <button className="form-btn"> <FaRegComment className="fs-2" /> Comment</button>
            </div>
            <div className="likes-count">
              3 like
            </div>
  
            <div className="caption">
              <span className="username">min_nie</span> 
            </div>
          </div>
          </Link>
      </div>
    )
}
export default View;