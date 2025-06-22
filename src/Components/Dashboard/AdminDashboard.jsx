import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTask from "../Others/AllTask";

const AdminDashboard = (props) => {
  return (
    <div className="w-screen h-screen bg-black p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask  />
    </div>
  );
};

export default AdminDashboard;
