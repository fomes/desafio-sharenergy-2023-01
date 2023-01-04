import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styles from "../styles/errorPage.module.css";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1>
        <span onClick={() => navigate("/")}>
          <IoArrowBackCircleSharp size={28} />
        </span>
        <code>Access Denied</code>
      </h1>
      <hr style={{ margin: "auto", width: "50%" }} />
      <h3>You dont have permission to view this page.</h3>
      <h3>🚫🚫🚫🚫</h3>
      <h6>ERROR 403: FORBIDDEN</h6>
    </div>
  );
}
