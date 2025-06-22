import React from "react";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  // console.log(data.tasks.map((task) => task.title)); // Log all titles

  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto w-full mt-10 p-5 flex gap-5 flex-nowrap"
    >
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem}/>;
        }
        if (elem.complete) {
          return <CompleteTask key={idx} data={elem}/>;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}/>;
        }
        if (elem.NewTask) {
          return <NewTask key={idx} data={elem}/>;
        }
      })}
    </div>
  );
};

export default TaskList;
