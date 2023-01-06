import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.btnContainer}>
        <Link to={"/home"}>
          <span>Home</span>
        </Link>

        <Link to={"/cats"}>
          <span>Cats</span>
        </Link>

        <Link to={"/dogs"}>
          <span>Dogs</span>
        </Link>

        <Link to={"/clients"}>
          <span>Customers</span>
        </Link>
      </div>

      <button onClick={handleLogOut}>
        <BiLogOutCircle /> <span>Logout</span>
      </button>
    </div>
  );
}
