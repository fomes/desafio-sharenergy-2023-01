import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { handleLogOut } from "../utils/handleLogOut";
import styles from "../styles/page.module.css";

export default function ClientsPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>ClientsPage</h1>
      <button onClick={() => handleLogOut(navigate("/"))}>Logout</button>
      <Navbar />
    </div>
  );
}