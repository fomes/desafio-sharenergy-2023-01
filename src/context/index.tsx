import { createContext, useEffect, useState } from "react";

interface DataProps {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as DataProps);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [auth, setAuth] = useState(localStorage.getItem("auth") ? true : false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
