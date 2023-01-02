import React, { ChangeEventHandler, MouseEventHandler } from "react";
import styles from "../styles/filter.module.css";

interface FilterComponentProps {
  filterText: string;
  onFilter: ChangeEventHandler<HTMLInputElement>;
  onClear: MouseEventHandler<HTMLButtonElement>;
}

export const FilterComponent = ({
  filterText,
  onFilter,
  onClear,
}: FilterComponentProps) => (
  <div className={styles.container}>
    <input
      id="search"
      type="text"
      value={filterText}
      onChange={onFilter}
      placeholder="Search"
    />
  </div>
);

export default FilterComponent;
