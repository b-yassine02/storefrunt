import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const [edit, setEdit] = useState({
        username: "", password: "",
        firstname: "", lastname: "", email: "", description: "", role: ""
    });
    const navigate = useNavigate();
    // Not sure how you connect or naming things, so 
    // this is just a placeholder for all the method i think needed
    // but please add anything you need to make it work

    // const fetchProfile = async () => {
    //     const account = await profile.getUser();
    //     setEdit(account);
    // }

    // const save = async () => {
    //     await profile.updateUser(edit);
    // }

    const cancel = async () => {
        navigate("/Main/Profile");
    }

    // useEffect(() => {
    //     fetchProfile();
    // }, []);

    return (
        <div>
            {/* Not sure how you want to add the edit profile picture */}
            {edit && (
                <div className="heading-edit">
                    <h3>Edit Profile</h3>
                    <div className="pfp-edit">
                        <div className="wd-profile-circle-edit">
                            <img src="/images/duckie.jpg" alt="profile" />
                        </div>
                        <div className="names-edit">
                            <b className="username-edit">{edit.username}</b>
                            <br />
                            <div className="fullname-edit">
                                {edit.firstname}&nbsp;{edit.lastname}
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
                        <input className="name-input" type="text" value={edit.firstname} onChange={(e) =>
                            setEdit({ ...edit, firstname: e.target.value })
                        } />
                        <br />
                        <br />
                        <h6 className="lastname-edit">Last Name</h6>
                        <input className="name-input" type="text" value={edit.lastname} onChange={(e) =>
                            setEdit({ ...edit, lastname: e.target.value })
                        } />
                        <br />
                        <br />
                        <h6>Username</h6>
                        <input className="name-input" type="text" value={edit.username} onChange={(e) =>
                            setEdit({ ...edit, username: e.target.value })
                        } />
                        <br />
                        <br />
                        <h6>Password</h6>
                        <input className="name-input" type="text" value={edit.password} onChange={(e) =>
                            setEdit({ ...edit, password: e.target.value })
                        } />
                    </div>
                    <br />
                    <div className="bio-edit">
                        <h4>Bio</h4>
                        <textarea placeholder="Bio" onChange={(e) =>
                            setEdit({ ...edit, description: e.target.value })
                        }> 
                            {edit.description}
                        </textarea>
                    </div>
                    <br />
                    <div className="submit-edit">
                        <button><b>Submit</b></button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default EditProfile;