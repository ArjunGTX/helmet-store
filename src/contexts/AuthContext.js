import { useState, useEffect, useContext, createContext } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("auth"))
      ? JSON.parse(localStorage.getItem("auth"))
      : {
          encodedToken: "",
          isLoggedIn: false,
        }
  );

  useEffect(() => {
    localStorage.setItem(
      "auth",
      JSON.stringify({
        isLoggedIn: auth.isLoggedIn,
        encodedToken: auth.encodedToken,
      })
    );
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
