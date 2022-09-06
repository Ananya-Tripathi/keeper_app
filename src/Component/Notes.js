import React from "react";
import { NotesComponent } from "./NotesComponent";

export default function Notes() {
  return (
    <div className="mx-10 mt-10 h-[600px] border-4 flex-wrap gap-8">
      <NotesComponent title="Notes" notes="notes" />
      <NotesComponent title="pluck" notes="pick " />
    </div>
  );
}
