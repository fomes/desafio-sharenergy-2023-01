import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <Link to={"/home"}>
        <span>1</span>
      </Link>

      <Link to={"/cats"}>
        <span>2</span>
      </Link>

      <Link to={"/dogs"}>
        <span>3</span>
      </Link>

      <Link to={"/clients"}>
        <span>4</span>
      </Link>
    </div>
  );
}
