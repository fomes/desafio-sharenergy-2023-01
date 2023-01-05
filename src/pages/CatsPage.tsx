import React, { FormEvent, useState } from "react";
import Navbar from "../components/Navbar";
import defaultStyles from "../styles/page.module.css";
import styles from "../styles/catsPage.module.css";

export default function CatsPage() {
  const [inptuText, setInputText] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleGetCats = (event: FormEvent) => {
    event.preventDefault();
    setImageUrl("https://http.cat/" + inptuText);
  };

  return (
    <>
      <div className={defaultStyles.container}>
        <Navbar />
        <h1>Cats</h1>

        <form action="#">
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="HTTP status code"
              className={styles.inputStatus}
              onChange={(event) => setInputText(event.target.value)}
            />

            <button onClick={handleGetCats} type="submit">
              GO
            </button>
          </div>
        </form>
        <div className={styles.imgContainer}>
          <img src={imageUrl} alt="" />
        </div>
      </div>
    </>
  );
}
