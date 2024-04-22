import { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import "./index.css"
import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function Admin() {
    //const [users, setUsers] = useState([]);
    const users = [{
        username: "iron_man",
        firstname: "Tony",
        lastname: "Stark",
        email: "tony_stark123@gmail.com"
    },
    {
        username: "li.alli",
        firstname: "Allison",
        lastname: "Li",
        email: "lialli@gmail.com"
    }]

    return (
        <div>
            <h1>Users</h1>
            <table className="table">
                <thead>
                    <tr>
                        <td><b>Username</b></td>
                        <td><b>First Name</b></td>
                        <td><b>Last Name</b></td>
                        <td><b>View User Profile</b></td>
                        <td><b>Delete User</b></td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user._id}>
                            <td>{user.username}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td className="text-nowrap">
                                    <FaArrowRightFromBracket />
                            </td>
                            <td className="text-nowrap">
                                    <BsTrash3Fill />
                            </td>
                        </tr>))}
                </tbody>
            </table>
        </div>)
}