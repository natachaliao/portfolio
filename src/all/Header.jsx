import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = (props) => {
  const { name } = props;

  // Handle Header categories selection
  const [ selectedHeaderCateg, setSelectedHeaderCateg ] = useState("home");
  const selectedCategory= (selectedHeaderCateg) => {
    if(selectedHeaderCateg === "home") return;
    const selected = document.getElementById(`h-${selectedHeaderCateg}`);
    const all = document.querySelectorAll("#h-categories>*");
    all.forEach((categ) => categ.classList.remove("selected"));
    selected.classList.add("selected");
  }

  useEffect(() => {
    selectedCategory(selectedHeaderCateg);
  })

  return (
    <div id="header">
      <h1 id="h-title" onClick={() => setSelectedHeaderCateg(selectedHeaderCateg => "home")}><Link to="/home">{name}</Link></h1>
      <div id="h-categories">
        <span id="h-contact" onClick={() => setSelectedHeaderCateg(selectedHeaderCateg => "contact")}>Contact</span>
        <span id="h-apropos" onClick={() => setSelectedHeaderCateg(selectedHeaderCateg => "apropos")}>A propos</span>
      </div>
    </div>
  )
}

export default Header;