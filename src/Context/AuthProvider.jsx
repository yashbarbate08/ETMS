import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../Utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   localStorage.clear()
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage();
    const { Employees } = getLocalStorage();
    setUserData(Employees);
  }, []);

  return (
    <AuthContext.Provider value={[UserData, setUserData]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
