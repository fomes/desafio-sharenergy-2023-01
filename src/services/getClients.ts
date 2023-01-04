import { api } from "./api";

export const getClients = async (setClients: (value: any) => void) => {
  try {
    const resp = await api.get("/clients");
    setClients(resp.data.clients);
  } catch (err) {
    console.log(err);
  }
};
