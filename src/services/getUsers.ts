import { apiUsers } from "./api";

export const getUsers = async (setUsers: (value: any) => void) => {
  try {
    const resp = await apiUsers.get("/?results=20");
    setUsers(resp.data.results);
  } catch (err) {
    console.log(err);
  }
};
