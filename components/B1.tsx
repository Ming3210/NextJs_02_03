import React from "react";
import { FaEye } from "react-icons/fa";

export default function B1() {
  return (
    <div>
      <h2>B1</h2>
      <p className="text-sky-400">Label</p>
      <input
        type="text"
        className="rounded-md placeholder:text-[15px]"
        placeholder="placeholder"
      />
      <span className="relative right-6 top-1">
        <FaEye />
      </span>
      <p className="text-sm text-slate-600">Helper Text</p>
    </div>
  );
}
