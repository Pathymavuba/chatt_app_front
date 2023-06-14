import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styled.css";

const Home = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [validInput, setValidInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName.length <= 3) return setValidInput(true);
    localStorage.setItem("userName", userName);
    navigate("/chat");
  };
  const handleName = (e) => {
    setValidInput(false);
    setUserName(e.target.value);
  };
  return (
    <>
      <form className="home__container" onSubmit={handleSubmit}>
        <h2 className="home__header">Sign in to Open Chat</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="username__input"
          value={userName}
          onChange={handleName}
        />
        <button className="home__cta">SIGN IN</button>

        {validInput && (
          <span style={{ color: "red" }}>More than 4 characters required</span>
        )}
      </form>
    </>
  );
};

export default Home;
