import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = (props) => {
  const { name, selectedHeaderCateg, setSelectedHeaderCateg } = props;

  // Handle Header categories selection
  const selectedCategory= (selectedHeaderCateg) => {
    const selected = document.getElementById(`h-${selectedHeaderCateg}`);
    const all = document.querySelectorAll("#h-categories>*");
    all.forEach((categ) => categ.classList.remove("selected"));
    if(selectedHeaderCateg !== "none")
      selected.classList.add("selected");
  }

  useEffect(() => {
    selectedCategory(selectedHeaderCateg);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

  return (
    <div id="header">
      <h1 id="h-title" onClick={() => setSelectedHeaderCateg(selectedHeaderCateg => "portfolio")}><Link to="/">{name}</Link></h1>
      <div id="h-categories">
        <span id="h-portfolio" className="selected" onClick={() => setSelectedHeaderCateg(selectedHeaderCateg => "portfolio")}><Link to="/">Portfolio</Link></span>
        <span id="h-apropos" onClick={() => setSelectedHeaderCateg(selectedHeaderCateg => "apropos")}><Link to="/apropos">A propos</Link></span>
      </div>
    </div>
  )
}

export default Header;