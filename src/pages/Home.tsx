import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import styles from "../styles/page.module.css";
import { handleLogOut } from "../utils/handleLogOut";

export default function Home() {
  const [name] = useState(localStorage.getItem("user"));
  const [auth] = useState(localStorage.getItem("auth"));
  const [remember] = useState(localStorage.getItem("remember"));

  const navigate = useNavigate();

  return (
    <>
      {auth || (auth && remember) ? (
        <div className={styles.container}>
          <h1>Welcome {name}!</h1>
          <button onClick={() => handleLogOut(navigate("/"))}>Logout</button>
          <Navbar />
          <Table />
        </div>
      ) : (
        <h1>Não autorizado!</h1>
      )}
    </>
  );
}
