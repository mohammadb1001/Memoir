import React from "react";
import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left-half">
        {/* <h2 className="logo">Memoir</h2> */}
        <img src={logo} alt="logo" className="logo" />
        <form className="d-flex" role="search">
          <input
            className="form-control me-2 search"
            type="search"
            placeholder="Search Memoir"
            aria-label="Search"
          />
          <button className="btn btn-outline-success search-btn" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="right-half">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            // onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
        <a href="/" className="new">
          <FontAwesomeIcon icon={faEdit} className="edit-icon" />
          New
        </a>
        <a href="/" className="login">
          Log In
        </a>
      </div>
    </div>
  );
}
