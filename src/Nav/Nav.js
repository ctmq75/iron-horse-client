import React from "react";
import "./Nav.css";
import horseicon from "../images/horseicon.png";
import flippedhorse from "../images/flippedhorse.png";


export default class Nav extends React.Component {
  render() {
    return (
      <div id="nav-container">
        <div id='heading-flex'>
          <img id="ironhorse-gif" src={horseicon} alt="iron horse gif" />
          <h3 id="nav-title"><a href="/">Iron Horse Antiques & Appraisers</a></h3>
          <ul id="navList">
          <li className="navList-item">
            <a href="/shop">Shop</a>
          </li>
          <li className="navList-item">
            <a className="active" href="/ourServices">
              Services
            </a>
          </li>
          <li className="navList-item">
            <a href="/about">About</a>
          </li>
          <li className="navList-item" id='ihmilitary'>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ironhorsemilitaryantiques.com/"
            >
              IH Military Antiques
            </a>
          </li>
          <li className="navList-item" id='ihestatesales'>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.ironhorseestatesales.com/"
            >
              IH Estate Sales
            </a>
          </li>
          </ul>
        </div>


      </div>
    );
  }
}

/*
          <img id="nav-shop" src={flippedhorse} alt="interior of shop" />


*/