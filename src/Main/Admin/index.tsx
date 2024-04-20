import { useState } from "react";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import "./index.css"

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