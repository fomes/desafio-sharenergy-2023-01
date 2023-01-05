import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { getUsers } from "../services/getUsers";
import styles from "../styles/page.module.css";
import stylesTable from "../styles/tableUsers.module.css";

export default function Home() {
  const [data, setData] = useState([]);

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

  useEffect(() => {
    getUsers(setData);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Navbar />
        <h1>Home</h1>

        <div className={stylesTable.container}>
          <div className={stylesTable.dataTable}>
            <Table dataProps={data} columnProps={columns} />
          </div>
        </div>
      </div>
    </>
  );
}
