import "./index.css"

function Edit() {
    const user = {
        username: "iron_man",
        firstname: "Tony",
        lastname: "Stark",
        email: "tony_stark123@gmail.com",
        bio: "I am Iron Man."
    };
    return (
        <div className="heading-edit">
            <h3>Edit Profile</h3>
            <br />
            <div className="pfp-edit">
                <div className="wd-profile-circle-edit">
                    <img src="/images/duckie.jpg" alt="profile" />
                </div>
                <div className="names-edit">
                    <b className="username-edit">{user.username}</b>
                    <br />
                    <div className="fullname-edit">
                        {user.firstname}&nbsp;{user.lastname}
                    </div>
                </div>
                <div className="changepic-edit">
                    <button>
                        <b>Change photo</b>
                    </button>
                </div>
            </div>
            <br />
            <h4>Name</h4>
            <div className="editName-edit">

                <h6 className="firstname-edit">First Name</h6>
                <input className="name-input" type="text" value={user.firstname}/>
                <br />
                <br />
                <h6 className="lastname-edit">Last Name</h6>
                <input className="name-input" type="text" value={user.lastname}/>
                <br />
                <br />
                <h6>Username</h6>
                <input className="name-input" type="text" value={user.username}/>
            </div>
            <br />
            <div className="bio-edit">
                <h4>Bio</h4>
                <textarea placeholder="Bio">
                    {user.bio}
                </textarea>
            </div>
            <br />
            <div className="submit-edit">
            <button><b>Submit</b></button>
            </div>
        </div>

    )

}
export default Edit;