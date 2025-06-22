import React from "react";
import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../Tasklist/TaskList";

const EmployeeDashboard = (props) => {
  // console.log({ data });

  return (
    <>
      <div className="w-screen h-screen bg-zinc-800 p-10">
        {/* <h1>{data.id}</h1> */}
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskListNumber data={props.data} />
        <TaskList data={props.data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
