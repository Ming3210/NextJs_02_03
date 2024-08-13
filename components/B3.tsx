import React from "react";

export default function B3() {
  return (
    <div>
      <h2>B3</h2>
      <form action="" className="w-[500px] p-10 bg-green-300">
        <h1 className="mb-5">Form Sign Up</h1>

        <div>
          <label htmlFor="">Name</label>
          <br />
          <input
            type="text"
            className="w-full h-8 pl-3 placeholder:pl-1 rounded-md"
            placeholder="Your Name"
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input
            type="text"
            className="w-full h-8 pl-3 placeholder:pl-1 rounded-md"
            placeholder="You@company.com"
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Phone Number</label>
          <span className="relative top-8 right-[115px]">
            <select
              name=""
              id=""
              className="-z-50  h-8 border-r-0 border-2 rounded-l-md"
            >
              <option value="">US</option>
              <option value="">US</option>
              <option value="">US</option>
            </select>
          </span>
          <input
            type="text"
            className="w-full  h-8 pl-3 placeholder:pl-8 rounded-md"
            placeholder="+84 (123) 456 789"
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Address</label>
          <br />
          <textarea
            name=""
            className="w-full h-20 rounded-md resize-none placeholder:pl-3"
            placeholder="Tell us a little about the project..."
            id=""
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="">Skill</label>
          <br />
          <div className="flex gap-7">
            {" "}
            <div className="flex flex-col">
              <div className="mb-3 mt-2">
                <input type="checkbox" />
                HTML
              </div>
              <div className="mb-3">
                <input type="checkbox" />
                UI design
              </div>
              <div className="mb-3">
                <input type="checkbox" />
                CSS
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mb-3 mt-2">
                <input type="checkbox" />
                JavaScript
              </div>
              <div className="mb-3">
                <input type="checkbox" />
                ReactJS
              </div>
              <div className="mb-3">
                <input type="checkbox" />
                Java
              </div>
            </div>
          </div>
        </div>
        <br />
      </form>
    </div>
  );
}
