import React, { Component } from "react";
import NavLink from "./NavLink";
import "../common/header.css";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-secondary navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink to="/users/new">
              <div className="numberCircle">1</div>&nbsp;&nbsp;
              <span>Personal</span>
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/">
              <div className="numberCircle">2</div>&nbsp;&nbsp;
              <span>List</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
