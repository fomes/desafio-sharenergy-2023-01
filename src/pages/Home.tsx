import React, { useContext, useEffect, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { AuthContext } from "../context";
import { getUsers } from "../services/getUsers";
import styles from "../styles/page.module.css";
import stylesTable from "../styles/tableUsers.module.css";
import ErrorPage from "./ErrorPage";

export default function Home() {
  const { auth, setAuth } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const columns = [
    {
      name: "Photo",
      selector: (row: any) => {
        return <img src={row.picture.thumbnail} alt="photo" />;
      },
      sortable: true,
      width: "16.66%",
    },
    {
      name: "Name",
      selector: (row: any) => row.name.first + " " + row.name.last,
      sortable: true,
      width: "16.66%",
    },
    {
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
      width: "16.66",
    },
    {
      name: "Username",
      selector: (row: any) => row.login.username,
      sortable: true,
      width: "16.66%",
    },
    {
      name: "Age",
      selector: (row: any) => row.dob.age,
      sortable: true,
      width: "16.66%",
    },
  ];

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("remember");
    setAuth(false);
    navigate("/");
  };

  useEffect(() => {
    getUsers(setData);
  }, []);

  return (
    <>
      {auth ? (
        <div className={styles.container}>
          <h1>Home</h1>
          <button onClick={handleLogOut}>
            <BiLogOutCircle /> Logout
          </button>
          <Navbar />

          <div className={stylesTable.container}>
            <div className={stylesTable.dataTable}>
              <Table dataProps={data} columnProps={columns} />
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
}
