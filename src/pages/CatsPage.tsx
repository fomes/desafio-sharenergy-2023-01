import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import defaultStyles from "../styles/page.module.css";
import styles from "../styles/catsPage.module.css";
import { BiLogOutCircle } from "react-icons/bi";
import { AuthContext } from "../context";
import ErrorPage from "./ErrorPage";

export default function CatsPage() {
  const [inptuText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const { auth, setAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleGetCats = () => {
    setImageUrl("https://http.cat/" + inptuText);
  };

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    setAuth(false);
    navigate("/");
  };

  return (
    <>
      {auth ? (
        <div className={defaultStyles.container}>
          <h1>Cats</h1>
          <button onClick={handleLogOut}>
            <BiLogOutCircle /> Logout
          </button>
          <Navbar />

          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="HTTP status code"
              className={styles.inputStatus}
              onChange={(event) => setInputText(event.target.value)}
            />

            <button onClick={handleGetCats}>GO</button>
          </div>
          <div className={styles.imgContainer}>
            <img src={imageUrl} alt="" />
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
