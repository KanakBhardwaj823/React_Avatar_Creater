import React, { useState } from "react";
import "./App.css";

function getRandomColor() {
  const colors = ["#ff6b6b", "#6bc5ff", "#6bffb3", "#ffd36b", "#b36bff"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function App() {
  const [users, setUsers] = useState(["A", "T", "B", "J", "M"]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const initial = input.trim()[0].toUpperCase();
      setUsers([...users, initial]);
      setInput("");
    }
  };

  const handleDeleteUser = (indexToDelete) => {
    setUsers(users.filter((_, idx) => idx !== indexToDelete));
  };

  return (
    <div className="app">
      <h1>User Avatar Generator</h1>
      <form onSubmit={handleAddUser} style={{ marginBottom: "16px" }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter name/initial"
        />
        <button type="submit">Add Avatar</button>
      </form>
      <div className="card">
        {users.map((name, index) => (
          <div
            key={index}
            className="avatar"
            style={{ backgroundColor: getRandomColor(), cursor: "pointer" }}
            title="Click to delete"
            onClick={() => handleDeleteUser(index)}
          >
            {name}
          </div>
        ))}
        </div>
    </div>
  );
}