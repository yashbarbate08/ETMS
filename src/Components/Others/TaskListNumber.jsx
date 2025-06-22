import React from "react";

const TaskListNumber = ({ data }) => {
  return (
    <div className="flex justify-evenly flex-wrap gap-5">
      <div className="bg-yellow-400 text-white p-5 rounded-xl w-[45%]">
        <h1 className="text-3xl font-semibold">{data.taskCounts.newTask}</h1>
        <h1 className="text-2xl font-semibold">New Task </h1>
      </div>
      <div className="bg-green-400 text-white p-5 rounded-xl w-[45%]">
        <h1 className="text-3xl font-semibold">{data.taskCounts.completed}</h1>
        <h1 className="text-2xl font-semibold">Complete Task </h1>
      </div>
      <div className="bg-red-500 text-white p-5 rounded-xl w-[45%]">
        <h1 className="text-3xl font-semibold">{data.taskCounts.failed}</h1>
        <h1 className="text-2xl font-semibold">Failed Task </h1>
      </div>
      <div className="bg-blue-400 text-white p-5 rounded-xl w-[45%]">
        <h1 className="text-3xl font-semibold">{data.taskCounts.active}</h1>
        <h1 className="text-2xl font-semibold">Active Task </h1>
      </div>
    </div>
  );
};

export default TaskListNumber;
