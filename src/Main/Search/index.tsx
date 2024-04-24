import FillerSearchResults from "./filler-search-results";
import "./index.css";
import { FormEvent, useEffect, useState } from "react";
import { User } from "../../Clients/userClient";
import * as userClient from "../../Clients/userClient";
import { LuWallet } from "react-icons/lu";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Navigate, useNavigate } from "react-router-dom";

export default function SearchBar({setOther} : {setOther: (other: String) => void;}) {
  const navigate = useNavigate();
  // const { text, setText, users } = FillerSearchResults();
  // const contentClass = [text !== "" && "visible", "content"].join(" ");
  // const filteredUsers = users.filter((user) =>
  //   user.name.toLowerCase().includes(text.toLowerCase())
  // );

  // function onSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   console.log("sent");
  // }
  
  const [users, setUsers] = useState<User[]>([]);
  const [letter, setLetter] = useState("");
  const [all, setAll] = useState<User[]>([]);

  const fetchAll = async () => {
    const user = await userClient.findAllUsers();
    setUsers(user);
  }

  const searchUser = async (word: string) => {
    const all = users.filter((str) => str.username.toLowerCase().
    startsWith(letter.toLowerCase()));
    setAll(all);
  }

  const addOther = async (user: String) => {
    setOther(user);
    navigate("/Main/Other");
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <>
      <h1>Search</h1>
      <div className="search-bar">
        {/* <form onSubmit={onSubmit}> */}
          <input
            type="text"
            placeholder="Type Something"
            className="search-bar__input"
            onChange={(e) => setLetter(e.target.value)}
            // value={text}
          />
          <br />
          <br />
          <button onClick={() => searchUser(letter)} type="submit" className="search-bar__btn">
            Search
          </button>
          <div>
            {all.map((user) => {
              return <div>
                {user.username}
                <button onClick={() => addOther(user._id)}><FaArrowRightFromBracket /></button>
                </div>
            })}
          </div>
        {/* </form> */}
        {/* <div className={contentClass}>
          {filteredUsers.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </div> */}
      </div>
    </>
  );
}
