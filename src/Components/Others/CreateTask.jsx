import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [category, setcategory] = useState("");
  const [AssignTo, setAssignTo] = useState("");

  const [Task, setTask] = useState({});

  const SubmitHandler = (e) => {
    e.preventDefault();

    const newTask = {
      title,
      description,
      date,
      category,
      NewTask: true,
      complete: false,
      failed: false,
      active: false,
    };

    setTask(newTask);

    const data = userData;
    // console.log(data);

    data.forEach(function (elem) {
      if (AssignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
        console.log(elem.tasks);
      }
    });

    setUserData(data);
    console.log(data);

    setAssignTo("");
    setcategory("");
    setdate("");
    setdescription("");
    settitle("");
  };
  return (
    <div>
      <div>
        <form action="">
          <div className="flex justify-between bg-zinc-800 rounded-md p-5 gap-10">
            <div className="flex flex-col w-1/2 text-zinc-300">
              <div className="flex flex-col mb-5">
                <label htmlFor="title">Title</label>
                <input
                  value={title}
                  onChange={(e) => {
                    settitle(e.target.value);
                  }}
                  type="text"
                  className="border-2 mt-1 border-zinc-500 rounded-md px-2 py-1 "
                  placeholder="Make UI, Edit Video etc."
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="date">Date</label>
                <input
                  value={date}
                  onChange={(e) => {
                    setdate(e.target.value);
                  }}
                  type="date"
                  className="border-2 mt-1 border-zinc-500 rounded-md px-2 py-1 "
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="Assign">Assign to</label>
                <input
                  value={AssignTo}
                  onChange={(e) => {
                    setAssignTo(e.target.value);
                  }}
                  type="text"
                  className="border-2 mt-1 border-zinc-500 rounded-md px-2 py-1 "
                  placeholder="Employee Name"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="Category">Category</label>
                <input
                  value={category}
                  onChange={(e) => {
                    setcategory(e.target.value);
                  }}
                  type="text"
                  className="border-2 mt-1 border-zinc-500 rounded-md px-2 py-1 "
                  placeholder="Design, DEV etc."
                />
              </div>
            </div>

            <div className="flex flex-col w-1/2 text-zinc-300">
              <div>
                <div>
                  <p>Description</p>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                  className=" resize: none border-2 border-zinc-500 rounded-md w-full   mt-1"
                  name="Description"
                  rows={10}
                  id=""
                ></textarea>
              </div>
              <div>
                <button
                  onClick={SubmitHandler}
                  className="bg-green-600 px-2 py-3 w-full rounded-md text-white"
                >
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
