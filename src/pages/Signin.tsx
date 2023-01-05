import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/signin.module.css";
import { FaUserCircle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { api } from "../services/api";

export default function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setAuth } = useAuth();

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      localStorage.setItem("remember", "1");
    } else {
      localStorage.removeItem("remember");
    }
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!userName || !password) {
      setError("Preencha todos os campos!");
      return;
    } else {
      try {
        setIsLoading(true);
        await api.post("/users/login", {
          username: userName,
          password,
        });

        setAuth(true);
        sessionStorage.setItem("auth", "1");
        navigate("/home");
      } catch (err: any) {
        setError(err?.response?.data?.error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (userName || password) {
      setError("");
    }
  }, [userName, password]);

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <i className={styles.userIcon}>
            <FaUserCircle />
          </i>
          <h2 className={styles.title}>Login</h2>
          <span className={styles.good}>Welcome back!</span>
        </header>

        <div className={styles.labelError}>{error}</div>

        <div className={styles.form}>
          <label htmlFor="email" className={styles.labelEmail}>
            <span className={styles.emailSpan}>Username</span>

            <div className={styles.inputEmailContainer}>
              <input
                autoFocus
                type="text"
                name="email"
                id="email"
                className={styles.inputEmail}
                placeholder="Enter your username"
                value={userName}
                onChange={(event: React.FormEvent<HTMLInputElement>) =>
                  setUserName(event.currentTarget.value)
                }
              />
            </div>
          </label>

          <label htmlFor="password" className={styles.labelPassword}>
            <span className={styles.passwordSpan}>Password</span>

            <div className={styles.inputPasswordContainer}>
              <input
                type="password"
                name="password"
                id="password"
                className={styles.inputPassword}
                placeholder="Enter your password"
                value={password}
                onChange={(event: React.FormEvent<HTMLInputElement>) =>
                  setPassword(event.currentTarget.value)
                }
              />
            </div>
          </label>

          <label htmlFor="remember" className={styles.labelRemember}>
            <input
              type="checkbox"
              name="inputCheckbox"
              checked={checked}
              onChange={handleChange}
              tabIndex={-1}
              className={styles.btnCheckbox}
            />
            <span className={styles.rememberSpan}>Remember me.</span>
          </label>

          <button
            type="button"
            className={styles.btnSignIn}
            onClick={handleLogin}
          >
            {isLoading ? <div className={styles.loader}></div> : "Sign In"}
          </button>
        </div>
      </div>
    </>
  );
}
