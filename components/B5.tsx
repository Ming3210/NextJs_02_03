import React from "react";
import { PiWarningOctagonThin } from "react-icons/pi";
import "../Sass/B5.scss";

export default function B5() {
  return (
    <div>
      <h2>B5</h2>
      <div className="popup">
        <div>
          <div className="cir-1">
            <div className="cir-2">
              <PiWarningOctagonThin className="icon" />
            </div>
          </div>
        </div>
        <div>
          <b>Delete blog post</b>
          <br />
          <br />
          <p>
            Are you sure to delete this blog post? This action cannot be undone
          </p>
        </div>
        <div className="button">
          <button className="cancel">Cancel</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </div>
  );
}
