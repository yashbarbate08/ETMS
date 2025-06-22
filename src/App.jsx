import { useState, useEffect, useContext } from "react";

import "./App.css";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

import { getLocalStorage, setLocalStorage } from "./Utils/LocalStorage";

function App() {
  useEffect(() => {
    setLocalStorage();
    // getLocalStorage();
  }, []);

  const [userData, setUserData] = useContext(AuthContext);
  // console.log(
  //   "Data1:",
  //   AuthData.Employees.find((e) => email)
  // );
  // console.log(
  //   AuthData.Employees.find((e) => email == e.email && password == e.password)
  // );

  // useEffect(() => {
  //   if (AuthData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role);
  //     }
  //   }
  // }, [AuthData]);

  const [user, setUser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setloggedInUserData(userData.data);
    }
  }, []);

  const HandleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log(user);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
      // console.log(user);
    } else {
      alert("Invalid Credentionls");
    }
  };

  return (
    <>
      <div>
        {!user ? <Login HandleLogin={HandleLogin} /> : ""}

        {user === "admin" && (
          <AdminDashboard changeUser={setUser} data={loggedInUserData} />
        )}
        {user === "employee" && (
          <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
        )}
      </div>
    </>
  );
}

export default App;
// loggedInUserData
