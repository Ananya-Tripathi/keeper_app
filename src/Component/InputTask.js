import React, { useState } from "react";

export default function InputTask(props) {
  const [task, setTask] = useState({
    title: "",
    meta: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTask((prevValue) => {
      return {
        ...prevValue,
        [name]: value, //here [] around name turns name from just a string to the value of object i.e, meta or task
      };
    });
  }
  function addTask(event) {
    setTask({
      title: "",
      meta: "",
    });
    props.onAdd(task);
  }

  return (
    <div className="md:max-w-xl max-w-sm mx-auto flex mt-10 ">
      <div className="flex flex-col">
        <input
          className="h-10 border-b-4 rounded-t-md pl-2 shadow-inner bg-slate-50"
          name="title"
          type="text"
          placeholder="Enter Task"
          value={task.title}
          onChange={handleChange}
        />
        <textarea
          className="w-[500px] h-24 rounded-b-md pl-2 pt-0 shadow-inner bg-slate-50"
          name="meta"
          type="text"
          placeholder="Enter task details..."
          value={task.meta}
          onChange={handleChange}
        />
      </div>

      <button
        className="w-20 h-20 bg-gray-700 text-white text-xl rounded-full p-2 ml-[-45px] mt-14"
        onClick={addTask}
      >
        ADD
      </button>
    </div>
  );
}
