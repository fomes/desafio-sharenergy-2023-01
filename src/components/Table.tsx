import React, { useEffect, useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { getUsers } from "../services/getUsers";
import { columns } from "../utils/userColumns";
import FilterComponent from "./FilterComponent";
import styles from "../styles/table.module.css";

export default function Table() {
  const [filterText, setFilterText] = React.useState("");
  const [users, setUsers] = useState([]);

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
            defaultSortFieldId={1}
            subHeaderComponent={subHeaderComponent}
            paginationRowsPerPageOptions={[5, 10, 20]}
          />
        </div>
      </>
    </div>
  );
}
