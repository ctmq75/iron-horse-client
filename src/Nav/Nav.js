import React from "react";
import './Nav.css'

export default class Nav extends React.Component {
  render() {
    return (
      <div id='nav-container'>
          <h3 id='nav-title'>Iron Horse Antiques & Appraisers</h3>
        <ul id='navList'>
          <li className='navList-item'>
            <a href="/">Home</a>
          </li>
          <li className='navList-item'>
            <a href="/shop">Our Shop</a>
          </li>
          <li className='navList-item'>
            <a className="active" href="/ourServices">
              Our Services
            </a>
          </li>
          <li className='navList-item'>
            <a href="/about">About</a>
          </li>
          <li className='navList-item'>
            <a target="_blank" rel='noopener noreferrer' href="https://www.ironhorsemilitaryantiques.com/">Iron Horse Military Antiques</a>
          </li>
          <li className='navList-item'>
            <a target="_blank" rel='noopener noreferrer' href="http://www.ironhorseestatesales.com/" target="_blank" rel="noopener noreferrer">Iron Horse Estate Sales</a>
          </li>
        </ul>
      </div>
    );
  }
}
