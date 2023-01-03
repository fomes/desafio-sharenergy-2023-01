import { apiStatus } from "./api";

export const getStatus = async (
  // setStatus: (value: any) => void,
  status: string
) => {
  try {
    const resp = await apiStatus.get(`/${status}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    console.log(status);
  } catch (err) {
    console.log(err);
  }
};
