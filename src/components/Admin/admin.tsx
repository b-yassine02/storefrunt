import { useState } from "react";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill } from "react-icons/bs";


export default function Admin() {
    const [users, setUsers] = useState([]);
    const user = {
        username: "iron_man", 
        password: "stark123",
        email: "tony_stark123@gmail.com",
        profilePic: ""
    }

    return (
        <div>
            <h1>Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td><b>Username</b></td>
                        <td><b>First Name</b></td>
                        <td><b>Last Name</b></td>
                        <th>&nbsp;</th>
                    </tr>
                    <tr>
                        <td>
                            <div className="divparent">
                                <div>
                                    <input className="form-control"
                                        // value={user.password}
                                        // onChange={(e) =>
                                        //     setUser({ ...user, password: e.target.value })}
                                             />
                                </div>
                                <div>
                                    <input className="form-control" 
                                    // value={user.username} onChange={(e) =>
                                    //     setUser({ ...user, username: e.target.value })}
                                         />
                                </div>
                            </div>
                        </td>
                        <td>
                            <input className="form-control" 
                            // value={user.firstName} onChange={(e) =>
                            //     setUser({ ...user, 
                            //         firstName: e.target.value })} 
                                />
                        </td>
                        <td>
                            <input className="form-control" 
                            // value={user.lastName} onChange={(e) =>
                            //     setUser({ ...user, lastName: e.target.value })} 
                                />
                        </td>
                        <td>
                        </td>
                        <td className="text-nowrap">
                            <BsFillCheckCircleFill
                                // onClick={updateUser}
                                className="me-2 text-success fs-2 text"
                            />
                            <BsPlusCircleFill className="me-2 text-success fs-2 text" 
                            // onClick={createUser} 
                            />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.role}</td>
                            <td className="text-nowrap">
                                <button className="btn btn-danger me-2" 
                                // onClick={() => deleteUser(user)}
                                >
                                    <BsTrash3Fill />
                                </button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>)
}