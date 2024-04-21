import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const [edit, setEdit] = useState({ username: "", password: "", 
    firstname: "", lastname: "", email: "", description: "", role: "" });
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
        <div className="wd-edit-profile">
            <div className="wd-edit-circle">
                    <img src="/images/duckie.jpg" alt="profile" />
            </div>
            {/* Not sure how you want to add the edit profile picture */}
            {edit && (
                <div>
                    <div className="wd-edit-field">
                        <div className="wd-edit-username">Username</div>
                        <input className="form-control" value={edit.username} onChange={(e) =>
                            setEdit({ ...edit, username: e.target.value})
                        }/>
                    </div>
                    <div className="wd-edit-field">
                        <div className="wd-edit-password">Password</div>
                        <input type="password" className="form-control" value={edit.password} onChange={(e) =>
                            setEdit({ ...edit, password: e.target.value})
                        }/>
                    </div>
                    <div className="wd-edit-field">
                        <div className="wd-edit-firstname">First Name</div>
                        <input className="form-control" value={edit.firstname} onChange={(e) =>
                            setEdit({ ...edit, firstname: e.target.value})
                        }/>
                    </div>
                    <div className="wd-edit-field">
                        <div className="wd-edit-lastname">Last Name</div>
                        <input className="form-control" value={edit.lastname} onChange={(e) =>
                            setEdit({ ...edit, lastname: e.target.value})
                        }/>
                    </div>
                    <div className="wd-edit-field">
                        <div className="wd-edit-email">Email</div>
                        <input className="form-control" value={edit.email} onChange={(e) =>
                            setEdit({ ...edit, email: e.target.value})
                        }/>
                    </div>
                    <div className="wd-edit-field">
                        <div className="wd-edit-description">Description</div>
                        <input className="form-control" value={edit.description} onChange={(e) =>
                            setEdit({ ...edit, description: e.target.value})
                        }/>
                    </div>
                    <button className="btn btn-success" style={{ marginRight: "10px"}}>Save</button>
                    <button onClick={cancel} className="btn btn-danger">Cancel</button>
                </div>
            )}
        </div>
    )
}
export default EditProfile;