import React from "react";
import { NotesComponent } from "./NotesComponent";
import data from "./data";
export default function Notes() {
  return (
    <div className="mx-10 my-10 flex flex-wrap gap-8 min-h-screen px-4 ">
      {data.map(NotesComponent)}
    </div>
  );
}
