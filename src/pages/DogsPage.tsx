import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import defaultStyles from "../styles/page.module.css";
import styles from "../styles/dogsPage.module.css";
import { BiLogOutCircle } from "react-icons/bi";
import { AuthContext } from "../context/auth";
import ErrorPage from "./ErrorPage";

export default function DogsPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    setAuth(false);
    navigate("/");
  };

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
    <>
      {auth ? (
        <div className={defaultStyles.container}>
          <h1>Dogs</h1>
          <button onClick={handleLogOut}>
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
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
