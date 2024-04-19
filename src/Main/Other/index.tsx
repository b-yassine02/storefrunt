import { Link } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Other() {
    return (
        <div className="wd-profile">
            <div className="wd-profile-top">
                <div className="wd-profile-circle">
                    <img src="/images/duckie.jpg" alt="profile" />
                </div>
                <div className="wd-profile-info">
                    <div className="info_1">
                        <h5 style={{ paddingTop: '20px'}}>Storefrunt</h5>
                        <button type="button" className="following">Following</button>
                        <button type="button" className="message">Message</button>
                        <button type="button" className="add-friends">Add?</button>
                    </div>
                    <div className="info_2">
                        <span style={{  display: 'flex' }}>
                            <p className="post_num">0</p>
                            <p className="post_info">posts</p>
                        </span>
                        <span style={{  display: 'flex' }}>
                            <p className="followers_num">0</p>
                            <p className="followers_info">followers</p>
                        </span>
                        <span style={{  display: 'flex' }}>
                            <p className="following_num">128</p>
                            <p className="following_info">following</p>
                        </span>
                    </div>
                    <div className="info_3">
                        <div className="other_info">Other Info?</div>
                    </div>
                </div> 
            </div> 
            <hr className="mx-auto" style={{ width: '70%', }}/>
            <div className="wd-profile-bottom">
                <div className="row">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        <div className="col" style={{ width: 280, display: "flex" }}>
                            <div className="card">
                                <img src='images/P13.jpeg' className="card-img-top" alt="card-img"></img>
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
export default Other;