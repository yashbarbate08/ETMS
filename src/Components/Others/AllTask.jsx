import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(AuthData);

  return (
    <div id="alltask" className="bg-zinc-800 mt-3 rounded-md px-5 py-1 h-56  ">
      <div className="flex justify-between px-5 py-4 bg-amber-800 rounded-md mb-5">
        <h1 className="text-white w-1/6">Name</h1>
        <h1 className="text-white">New Task</h1>
        <h1 className="text-white">Active Task</h1>
        <h1 className="text-white">Completed Task</h1>
        <h1 className="text-white">Failed Task</h1>
        {/* <h1 className="text-white">Date</h1> */}
      </div>
      <div className="h-[60%] overflow-y-auto">
        {userData.map(function (elem, idx) {
          // console.log(elem.firstName)
          return (
            <div
              key={idx}
              className="flex justify-between px-5 py-1  border-2 border-emerald-400 rounded-md mb-4 "
            >
              <h1 className="text-white w-1/9  text-lg">{elem.firstName}</h1>
              <h1 className="text-blue-300">{elem.taskCounts.newTask}</h1>
              <h1 className="text-yellow-300 text-lg">
                {elem.taskCounts.active}
              </h1>
              <h1 className="text-white text-lg">
                {elem.taskCounts.completed}
              </h1>
              <h1 className="text-red-400 text-lg">{elem.taskCounts.failed}</h1>
              {/* <h1 className="text-white">{}</h1> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
