import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import FilterComponent from "./FilterComponent";

export default function Table({ dataProps, columnProps }: any) {
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [filterText, setFilterText] = React.useState("");

  const filteredItems = dataProps.filter(
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

  return (
    <DataTable
      keyField={"username"}
      theme="dark"
      striped
      subHeader
      pagination
      columns={columnProps}
      data={filteredItems}
      subHeaderComponent={subHeaderComponent}
      paginationRowsPerPageOptions={[5, 10]}
    />
  );
}
