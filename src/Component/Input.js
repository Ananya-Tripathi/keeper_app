import React, { useState } from "react";
export default function InputTask(props) {
    const [task,setTask]=useState([]);
    const [meta, setMeta]=useState([]);
     function handleTask(inputTask){
        setTask(prevValue =>{
            [...prevValue,inputTask]
        })
     }
     function handleMeta(inputMeta){
        setMeta(prevValue =>{
            [...prevValue,inputMeta]
        })
     }
  return (
    <div>
      <input type="text" placeholder="Enter Task" value={task}/>
      <textarea type="text" placeholder="Enter task details" value={meta} />
      <button className="bg-gray-700 text-white text-xl w-18 rounded-full p-2">
        ADD
      </button>
    </div>
  );
}
