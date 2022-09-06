import React from "react";

export function NotesComponent(props) {
  return (
    <div className="mx-10 my-10">
      <div className="rounded-md max-w-xs h-40 shadow-md shadow-black">
        <p className="font-bold">{props.title}</p>
        <p className="font-semibold">{props.notes}</p>
      </div>
    </div>
  );
}
