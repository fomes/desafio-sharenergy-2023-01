import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { handleLogOut } from "../utils/handleLogOut";
import styles from "../styles/page.module.css";
import { BiLogOutCircle } from "react-icons/bi";

export default function DogsPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>Dogs</h1>
      <button onClick={() => handleLogOut(navigate("/"))}>
        <BiLogOutCircle /> Logout
      </button>
      <Navbar />
    </div>
  );
}
