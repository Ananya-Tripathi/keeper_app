import React from "react";

export const Footer = () => {
  const d = new Date();
  return (
    <div className="max-w-screen mb-2">
      <p className="max-w-xs mx-auto text-slate-500 px-[100px]">
        @Copyright|{d.getFullYear()}
      </p>
    </div>
  );
};
