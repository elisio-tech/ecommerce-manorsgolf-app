import React from "react";

export default function BtnMenu() {
  return (
    <button className="flex flex-col gap-1 cursor-pointer">
      {[1, 2].map((i) => (
        <div key={i} className="w-8 h-0.5 bg-zinc-500" />
      ))}
    </button>
  );
}
