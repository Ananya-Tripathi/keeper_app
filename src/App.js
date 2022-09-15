import React from "react";
import Header from "./Component/Header";
import Notes from "./Component/Notes";
import { Footer } from "./Component/Footer";
import InputTask from "./Component/Input"
export default function App() {
  return (
    <div className="bg-slate-400">
      <Header />
      <InputTask />
      <Notes />
      <Footer />
    </div>
  );
}
