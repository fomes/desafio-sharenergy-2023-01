import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { handleLogOut } from "../utils/handleLogOut";
import defaultStyles from "../styles/page.module.css";
import styles from "../styles/dogsPage.module.css";
import { BiLogOutCircle } from "react-icons/bi";

export default function DogsPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleGetDogs = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await resp.json();
      setImageUrl(data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={defaultStyles.container}>
      <h1>Dogs</h1>
      <button onClick={() => handleLogOut(navigate("/"))}>
        <BiLogOutCircle /> Logout
      </button>
      <Navbar />

      <button onClick={handleGetDogs}>New Dog</button>

      <div className={styles.imgContainer}>
        {isLoading ? (
          <div className={styles.loader}></div>
        ) : (
          <img src={imageUrl} alt="" />
        )}
      </div>
    </div>
  );
}
