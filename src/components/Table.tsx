import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { getUsers } from "../services/getUsers";
import FilterComponent from "./FilterComponent";
import styles from "../styles/table.module.css";

export default function Table() {
  const [filterText, setFilterText] = React.useState("");
  const [users, setUsers] = useState([]);

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

  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const filteredItems = users.filter(
    (item: any) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <div className={styles.container}>
      <>
        <div className={styles.dataTable}>
          <DataTable
            striped
            subHeader
            pagination
            columns={columns}
            data={filteredItems}
            defaultSortFieldId={2}
            subHeaderComponent={subHeaderComponent}
            paginationRowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </>
    </div>
  );
}
