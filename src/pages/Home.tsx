import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/home.module.css";

export default function Home() {
  const [name] = useState(localStorage.getItem("user"));
  const [auth] = useState(localStorage.getItem("auth"));
  const [remember] = useState(localStorage.getItem("remember"));
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    localStorage.removeItem("remember");
    navigate("/");
  };

  return (
    <>
      {auth || (auth && remember) ? (
        <div className={styles.container}>
          <h1>Welcome {name}!</h1>
          <button onClick={handleLogOut}>Logout</button>
        </div>
      ) : (
        <h1>Não autorizado!</h1>
      )}
    </>
  );
}
