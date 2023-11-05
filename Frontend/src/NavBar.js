import React, { useState, useEffect } from 'react';
import Logo from './logowhite.svg';
import "./CSS_Sheets/SideBarButton.css";
import SideBar from "./SideBar.js"

export const otherFunction = (isMenuOpen) => {
  console.log(isMenuOpen);
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonClass = `ham ham2 ${isMenuOpen ? 'active' : ''}`;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobileView = windowWidth <= 600;

  const navStyle = {
    position: 'fixed',
    display: 'flex',
    width: "100%",
    top: "0",
    left: "0",
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.85)',
    // backdropFilter: 'blur(5px)',
  };

  const listItemStyle = {
    listStyle: 'none',
    padding: "10px 20px 10px 0px"
  };

  const ItemStyle = {
    margin: '0 10px',
    listStyle: 'none',
    display:"inline-block"
  };

  const imgStyle = {
    width: '200px',
    height: '30px',
    padding: '20px 0px 20px 0px'
  };
  return (
    <nav style={navStyle}>
      <a href="/">
        <img src={Logo} alt="Logo" style={imgStyle} />
      </a>
      {isMobileView ? (
        <>
        <svg className={buttonClass} viewBox="0 0 100 100" width="60" onClick={toggleMenu}>
        <path
          className="line top"
          d="m 70,33 h -40 c -6.5909,0 -7.763966,-4.501509 -7.763966,-7.511428 0,-4.721448 3.376452,-9.583771 13.876919,-9.583771 14.786182,0 11.409257,14.896182 9.596449,21.970818 -1.812808,7.074636 -15.709402,12.124381 -15.709402,12.124381"
        />
        <path
          className="line middle"
          d="m 30,50 h 40"
        />
        <path
          className="line bottom"
          d="m 70,67 h -40 c -6.5909,0 -7.763966,4.501509 -7.763966,7.511428 0,4.721448 3.376452,9.583771 13.876919,9.583771 14.786182,0 11.409257,-14.896182 9.596449,-21.970818 -1.812808,-7.074636 -15.709402,-12.124381 -15.709402,-12.124381"
        />
        </svg>
        <SideBar isOpen={isMenuOpen}/>
        </>
      ) : (
        <ul style={listItemStyle}>
        <li style={ItemStyle}>
          <a href="/">Strona Główna</a>
        </li>
        <li style={ItemStyle}>
          <a href="/about">O mnie</a>
        </li>
        <li style={ItemStyle}>
          <a href="/contact">Kontakt</a>
        </li>
        <li style={ItemStyle}>
          <a href="/projects">Projekty</a>
        </li>
      </ul>
      )}
    </nav>
  );
};

export default NavBar;