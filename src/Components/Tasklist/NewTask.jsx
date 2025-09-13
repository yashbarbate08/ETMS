import React from "react";
import AcceptTask from "./AcceptTask";

const NewTask = ({ data, onAccept }) => {
  const acceptIt = () => {
    onAccept(data.id); // Pass task ID to parent
  };

  return (
    <div>
      <div className="h-full w-[300px] bg-purple-500 rounded-3xl flex-shrink-0">
        <div className="flex justify-between p-5 items-center">
          <div>
            <h3 className="bg-zinc-800 px-2 text-white py-1 rounded-md">
              {data.category}
            </h3>
          </div>
          <div>
            <p>{data.date}</p>
          </div>
        </div>
        <div className="p-5 ">
          <div>
            <h2 className="text-2xl font-semibold text-white">{data.title}</h2>
          </div>
          <div>
            <p className="mt-2 text-base text-zinc-800">{data.description}</p>
          </div>
        </div>
        <div className="flex justify-between p-4 text-white">
          <button
            onClick={acceptIt}
            className="bg-blue-500 px-2 py-2 rounded-md text-sm"
          >
            Accept Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
