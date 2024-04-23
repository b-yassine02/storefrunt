import FillerSearchResults from "./filler-search-results";
import "./index.css";
import { FormEvent } from "react";

export default function SearchBar() {
  const { text, setText, users } = FillerSearchResults();
  const contentClass = [text !== "" && "visible", "content"].join(" ");
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(text.toLowerCase())
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log("sent");
  }

  return (
    <>
      <h1>Search</h1>
      <div className="search-bar">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Type Something"
            className="search-bar__input"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
          <br />
          <br />
          <button type="submit" className="search-bar__btn">
            Search
          </button>
        </form>
        <div className={contentClass}>
          {filteredUsers.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </div>
      </div>
    </>
  );
}
