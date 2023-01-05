import { createContext, useEffect, useState } from "react";

interface DataProps {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
  logOut: () => void;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({} as DataProps);

export const AuthProvider = ({ children }: ProviderProps) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("auth")) {
      setAuth(true);
    }
  }, [auth]);

  const logOut = () => {
    sessionStorage.removeItem("auth");
    localStorage.removeItem("remember");
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
