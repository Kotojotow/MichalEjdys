import React from "react";
import "./CSS_Sheets/SideBar.css"

const SideBar = ({isOpen}) =>{
    const myElementClass = isOpen ? 'containervisible' : 'containerunvisible';
    const listItemStyle = {
        listStyle: 'none',
        padding: "100px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      };
    
      const ItemStyle = {
        padding: "30px 30px",
        listStyle: 'none',

      };

    return(
        <div className={myElementClass}>
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
        </div>
    )
}

export default SideBar;