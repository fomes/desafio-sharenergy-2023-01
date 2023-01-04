import { api } from "./api";

export const deleteClient = async (id: string) => {
  try {
    await api.delete("/clients/del", {
      data: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
