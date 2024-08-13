import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { IoIosAlarm } from "react-icons/io";

export default function B2() {
  return (
    <div>
      <h2>B2</h2>
      <div className="w-[400px] bg-slate-200 flex flex-col justify-center items-center">
        <div className="mb-4 w-[360px]">
          <p className="mb-2">Input Label</p>
          <div className="relative">
            <span className="absolute left-[10px] top-[2px]">
              <IoIosAlarm className="text-[20px]" />
            </span>
            <input
              className="w-full pl-8 h-6 border border-blue-500 rounded-md"
              type="text"
            />
            <span className="absolute right-[10px] top-[2px]">
              <FaCaretDown className="text-[20px]" />
            </span>
          </div>
        </div>
        <div className="w-[90%] bg-red-400 my-2 rounded-lg">
          <div className="flex justify-between h-full w-full p-2">
            Label
            <input
              checked
              className="peer-checked:bg-blue-500"
              type="checkbox"
            />
          </div>
          <div className="flex justify-between h-full w-full p-2">
            Label
            <input className="peer-checked:bg-blue-500 " type="checkbox" />
          </div>
          <div className="flex justify-between h-full w-full p-2">
            Label
            <input className="peer-checked:bg-blue-500 " type="checkbox" />
          </div>
          <div className="flex justify-between h-full w-full p-2">
            Label
            <input
              checked
              className="peer-checked:bg-blue-500 "
              type="checkbox"
            />
          </div>
          <div className="flex justify-center gap-2">
            <button className="border-1 border-slate-500 flex justify-center items-center w-[45%] h-7 mb-2 rounded-md">
              Clear
            </button>
            <button className="bg-blue-600 text-white w-[45%] h-7 mb-2 border-0 rounded-md flex justify-center items-center">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
