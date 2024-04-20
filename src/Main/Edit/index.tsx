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
            <h2>Edit Profile</h2>
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
            <br />
            <h3>Name</h3>
            <div className="editName-edit">

                <h5 className="firstname-edit">First Name</h5>
                <input className="name-input" type="text" value={user.firstname}/>
                <br />
                <br />
                <h5 className="lastname-edit">Last Name</h5>
                <input className="name-input" type="text" value={user.lastname}/>
                <br />
                <br />
                <h5>Username</h5>
                <input className="name-input" type="text" value={user.username}/>
            </div>
            <br />
            <div className="bio-edit">
                <h3>Bio</h3>
                <br />
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