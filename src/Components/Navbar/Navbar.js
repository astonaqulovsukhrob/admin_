import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Input } from "antd";
import {
  Bars_Icon,
  Bell_Icon,
  CloseIcon,
  Gear_Icon,
  User_logo,
} from "../../assets/icon/icon";
import logo from "../../assets/images/ОКНОПРОФИ.png";
import { AllPage } from "../grouping/grouping";
import "../inputStyle/input.scss";
import "./navbar.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive, setCurrentPage } from "../../redux/currentPageReducer";
import { useState } from "react";

function Navbar() {
  const { currentPage, active } = useSelector((s) => s?.current_Page_Reducer);
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (pathname !== currentPage?.path) {
      let page = AllPage?.find((page, i) => page?.path === pathname);
      dispatch(setCurrentPage(page));
    }
    dispatch(setActive(false));
  }, [pathname]);

  return (
    <div className="header">
      <div className="site-header_top">
        <div className="site-header_page">
          <span>
            <span>Pages</span> / {currentPage?.text}
          </span>
        </div>
        <div className="site-header">
          <div className="site_form" style={{ position: "relative" }}>
            <Input placeholder="Type here..." />
            <label className="special_label">Type here...</label>
          </div>
          <div className="site-header_link">
            <ul>
              <li>
                <a href="#">
                  <User_logo />
                  <span>Sign In</span>
                </a>
              </li>
              <li className="bars" onClick={() => dispatch(setActive(true))}>
                <a href="#">
                  <Bars_Icon />
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
      <div className={`site-navbar_left  ${active ? "active" : ""}`}>
        <div className="site-navbar_logo">
          <img src={logo} alt="" />
          <span
            className="site-close"
            onClick={() => dispatch(setActive(false))}
          >
            <CloseIcon />
          </span>
        </div>
        <div
          style={{
            border: "1px solid rgba(255, 255, 255, 0.5803921569)",
            height: "1px",
          }}
        />
        <div className="site-navbar_link">
          {AllPage?.map((page, i) => {
            return (
              <NavLink
                to={page?.path}
                className={`${
                  page?.path === pathname ? "active_link " : ""
                }`}
              >
                <span>{page.text}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
