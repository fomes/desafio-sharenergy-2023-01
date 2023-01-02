export const columns = [
  {
    name: "Name",
    selector: (row: any) => row.name.first,
    sortable: true,
    width: "25%",
  },
  {
    name: "Email",
    selector: (row: any) => row.email,
    sortable: true,
    width: "25",
  },
  {
    name: "Username",
    selector: (row: any) => row.login.username,
    sortable: true,
    width: "25%",
  },
  {
    name: "Age",
    selector: (row: any) => row.dob.age,
    sortable: true,
    width: "25%",
  },
];
