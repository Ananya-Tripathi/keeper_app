import React, { useState } from "react";
import Header from "./Component/Header";
import { Footer } from "./Component/Footer";
import InputTask from "./Component/InputTask";
import NotesComponent from "./Component/NotesComponent";

export default function App() {
  const [note, setNote] = useState([]);
  function addNote(note) {
    console.log(note);
    setNote((prevValue) => {
      return [...prevValue, note];
    });
  }
  return (
    <div className="bg-slate-400">
      <Header />
      <InputTask onAdd={addNote} />
      <div className="mx-10 my-10 flex flex-wrap gap-8 min-h-screen px-4 ">
        {note.map((noteItem) => {
          return <NotesComponent title={note.title} content={note.content} />;
        })}
      </div>
      <Footer />
    </div>
  );
}
