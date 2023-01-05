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

      <button onClick={handleLogOut}>
        <BiLogOutCircle /> Logout
      </button>
    </div>
  );
}
