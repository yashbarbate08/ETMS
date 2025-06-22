import React, { useState, useEffect, useContext, use } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Header = (props) => {
  const { loggedInUser } = useContext(AuthContext);
  // console.log(loggedInUser);

  const [username, setUsername] = useState("");

  // ✅ Run only when `data` changes
  useEffect(() => {
    if (!props.data) {
      setUsername("Admin");
    } else {
      setUsername(props.data.firstName);
    }
  }, [props.data]);

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between mb-5">
      <h1 className="text-2xl font-semibold text-white">
        Hello <br />
        <span className="text-3xl font-semibold">{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-white rounded-md px-5 py-3"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
