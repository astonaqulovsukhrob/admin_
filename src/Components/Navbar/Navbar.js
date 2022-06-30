import { Input } from "antd";
import React from "react";
import { Bell_Icon, Gear_Icon, User_logo } from "../../assates/icon/icon";
import logo from "../../assates/images/ОКНОПРОФИ.png";
import "../inputStyle/input.scss";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="header">
      <div className="site-header_top">
        <div className="site-header_page">
          <span>
            <span>Pages</span> / dashboard
          </span>
        </div>
        <div className="site-header">
          <div>
            <Input placeholder="Type here..." />
            {/* <label className="">Type here...</label> */}
          </div>
          <div className="site-header_link">
            <ul>
              <li>
                <a href="#">
                  <User_logo />
                  <span>Sign In</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <Gear_Icon />
                </a>
              </li>
              <li>
                <a href="#">
                  <Bell_Icon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
