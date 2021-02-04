import React, { useState, useEffect } from "react";
import "./Navigation.css";
import horseicon from "../images/horseicon.png";
import flippedhorse from "../images/flippedhorse.png";
import { CSSTransition } from 'react-transition-group';

export default function Navigation(){
    const [isNavVisible, setNavVisibility] = useState(false);
const [isSmallScreen, setIsSmallScreen] = useState(false);

useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 700px)");
  mediaQuery.addListener(handleMediaQueryChange);
  handleMediaQueryChange(mediaQuery);

  return () => {
    mediaQuery.removeListener(handleMediaQueryChange);
  };
}, []);

const handleMediaQueryChange = mediaQuery => {
  if (mediaQuery.matches) {
    setIsSmallScreen(true);
  } else {
    setIsSmallScreen(false);
  }
};

const toggleNav = () => {
  setNavVisibility(!isNavVisible);
};

return (
  <header id="nav-container" className="Header">
        <img id="nav-shop logo" className='logo' src={flippedhorse} alt="interior of shop" />
        <h3 id="nav-title"><a href="/">Iron Horse Antiques & Appraisers</a></h3>

    <CSSTransition
      in={!isSmallScreen || isNavVisible}
      timeout={350}
      classNames="NavAnimation"
      unmountOnExit
    >
        <nav className="Nav">
          <a href="/shop">Shop</a>
          <a href="/ourServices">Services</a>
          <a href="/about">About</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.ironhorseestatesales.com/"
          >
            IH Estate Sales
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ironhorsemilitaryantiques.com/"
          >
            IH Military Antiques
          </a>
          </nav>
    </CSSTransition>
    <button className='burger-button' onClick={toggleNav} className="Burger">
    <img alt='burger' src="https://img.icons8.com/android/24/ffffff/menu.png"/>    </button>
  </header>
);

  }

/*
          <img id="nav-shop" src={flippedhorse} alt="interior of shop" />
    const [isNavVisible, setIsNavVisible] = useState(true);
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible)
    }

    const [isSmallScreen, setIsSmallScreen] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false)
        }
        
    };


    return (
      <header id="nav-container" className='Header'>
        <img id="nav-shop logo" className='logo' src={flippedhorse} alt="interior of shop" />
        <CSSTransition 
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames='NavAnimation'
        unmountOnExit
        >
        <nav className="Nav">
          <a href="/shop">Shop</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.ironhorseestatesales.com/"
          >
            IH Estate Sales
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.ironhorsemilitaryantiques.com/"
          >
            IH Military Antiques
          </a>
          </nav>
          </CSSTransition>
          <button onClick={toggleNav}><img alt='burger' src="https://img.icons8.com/ultraviolet/40/000000/menu--v3.png" /></button>

      </header>
    );

*/
