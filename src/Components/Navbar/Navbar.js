import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import { Bell_Icon, Gear_Icon, User_logo } from "../../assets/icon/icon";
import logo from "../../assets/images/ОКНОПРОФИ.png";
import { AllPage } from "../grouping/grouping";
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
      <div className="site-navbar_left">
        <div className="site-navbar_logo">
          <img src={logo} alt="" />
        </div>
        <div>
          {AllPage?.map((page) => {
            return <Link to={page?.path}>{page?.text}</Link>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
