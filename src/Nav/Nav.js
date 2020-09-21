import React from "react";
import './Nav.css'

export default class Nav extends React.Component {
  render() {
    return (
      <div id='nav-container'>
          <h3 id='nav-title'>Iron Horse Antiques & Appraisers</h3>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li >
            <a class="active" href="/ourServices">
              Our Services
            </a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/millitary">Iron Horse Military Antiques</a>
          </li>
        </ul>
      </div>
    );
  }
}
