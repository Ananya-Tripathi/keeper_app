import React from "react";
export default function NotesComponent( props) {
  return (
    <div className="rounded-md w-[250px] h-44 shadow-md shadow-black p-4 bg-slate-50">
      <p className="font-bold">{props.title}</p>
      <p className="font-semibold">{props.content}</p>
    </div>
  );
}
