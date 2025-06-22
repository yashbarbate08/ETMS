import React from "react";

const AcceptTask = ({ data }) => {
  // console.log(data.title);
//   console.log(data.taskCounts.AcceptTask);

  return (
    <div>
      <div className="h-full w-[300px] bg-red-400 rounded-3xl flex-shrink-0">
        <div className="flex justify-between p-5 items-center">
          <div>
            <h3 className="bg-zinc-800 px-2 text-white py-1 rounded-md">{data.category}</h3>
          </div>
          <div>
            <p>{data.date}</p>
          </div>
        </div>
        <div className="p-5 ">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              {data.title}hh
            </h2>
          </div>
          <div>
            <p className="mt-2 text-base text-zinc-800">
              {data.description}
            </p>
          </div>
        </div>
        <div className="flex justify-between p-4 text-white">
          <button className="bg-green-500 px-2 py-2 rounded-md text-sm">
            Mark as completed
          </button>
          <button className="bg-red-500 px-2 py-2 rounded-md text-sm">
            Mark as failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
