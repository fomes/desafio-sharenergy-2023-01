import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { handleLogOut } from "../utils/handleLogOut";
import defaultStyles from "../styles/page.module.css";
import styles from "../styles/catspage.module.css";
import { BiLogOutCircle } from "react-icons/bi";

export default function CatsPage() {
  const [inptuText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleGetCats = () => {
    setImageUrl("https://http.cat/" + inptuText);
  };

  return (
    <div className={defaultStyles.container}>
      <h1>Cats</h1>
      <button onClick={() => handleLogOut(navigate("/"))}>
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
  );
}
