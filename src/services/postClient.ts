import { api } from "./api";

export const postClient = async (
  name: string,
  cpf: string,
  email: string,
  phone: string,
  address: string
) => {
  try {
    await api.post("/clients/new", {
      name,
      cpf,
      email,
      phone,
      address,
    });
  } catch (err) {
    console.log(err);
  }
};
