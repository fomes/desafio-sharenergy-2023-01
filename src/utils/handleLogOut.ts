export const handleLogOut = (navigate: any) => {
  localStorage.removeItem("user");
  localStorage.removeItem("auth");
  localStorage.removeItem("remember");
  navigate("/");
};
