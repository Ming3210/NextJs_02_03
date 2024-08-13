import React from "react";
import { FaInternetExplorer } from "react-icons/fa";
import "../Sass/B6.scss";

export default function B6() {
  return (
    <div>
      <h2>B6</h2>
      <div className="header-container">
        <div className="head-1">
          <div>
            <FaInternetExplorer className="icon" />
          </div>
          <div>Internet Explorer</div>
        </div>
        <div className="head-2">
          <ul>
            <li className="home">Home</li>
            <li>Updates</li>
            <li>Services</li>
            <li>Feature</li>
            <li>About us</li>
          </ul>
        </div>
        <div className="head-3">
          <div>
            <img
              className="image"
              src="https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
