import { api } from "./api";

export const putClient = async (
  id: string,
  name: string,
  cpf: string,
  email: string,
  phone: string,
  address: string
) => {
  try {
    await api.put("/clients/edit", {
      id,
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
