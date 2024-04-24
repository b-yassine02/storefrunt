import { useState } from "react";
import { BsTrash3Fill } from "react-icons/bs";
import "./index.css";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { User } from "../../Clients/userClient";
import * as userClient from "../../Clients/userClient";
import { useEffect } from "react";

export default function Admin() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();

  const fetchUsers = async () => {
    const currUser = await userClient.profile();
    setCurrentUser(currUser);
    const users = await userClient.findAllUsers();
    setUsers(users);
  };

  const deleteUser = async (id: string) => {
    if (currentUser?.role !== "admin" || !currentUser) {
      alert("You do not have permission to delete users");
      return;
    } else {
      if (currentUser?._id === id) {
        alert("Cannot delete yourself");
        return;
      }
      await userClient.deleteUser({ _id: id });
    }
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table className="table">
        <thead>
          <tr>
            <td>
              <b>Username</b>
            </td>
            <td>
              <b>First Name</b>
            </td>
            <td>
              <b>Last Name</b>
            </td>
            <td>
              <b>View User Profile</b>
            </td>
            <td>
              <b>Delete User</b>
            </td>
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
                <button onClick={() => deleteUser(user._id)}>
                  <BsTrash3Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
