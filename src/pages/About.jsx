import portrait from '../assets/utils/portrait.png';
import mailImg from '../assets/utils/mail.png'
import githubImg from '../assets/utils/github_logo.png';
import './about.css';
import { useEffect } from 'react';
import { ReactComponent as Frame6 } from './../assets/utils/frame6.svg';

const About = (props) => {
  const { mail, github } = props;

  const changePattern = async (svg, idName, path) => {
    let id = `pattern-${idName}`;
    let pattern = svg.querySelector('pattern');
    pattern.setAttribute('id', id);

    let image = svg.querySelector('image');
    image.setAttribute('href', path);
    image.setAttribute("preserveAspectRatio", "xMidYMid slice");
    image.style.width = '100%';
    image.style.height = '100%';

    let framedPicture = svg.querySelector('.placeholder');
    framedPicture.setAttribute('fill', 'url(#' + id + ')');
  }

  useEffect(() => {
    const svg = document.querySelector(`#frame-portrait`);
    const path = require("../assets/utils/portrait.png").default;
    changePattern(svg, "portrait", path);
  }, [])

  return (
    <div className="about-wp">
      <div className="about">
        {/* <img className="portrait" alt="portrait" src={portrait}></img> */}
        <div className='portrait-wp'><Frame6 id="frame-portrait"/></div>
        <div className="about-desc">
          <p>Actuellement en 3ème année d'école d'ingénieurs dans la formation IMAC (Image, Multimédia, Audiovisuel et Communication), j'aime le développement web, le design graphique et le motion design. Je cherche un stage en développement web de 4/6 mois à compter du 28 mars.</p>
          <span className="about-links" id="about-mail">
            <img alt="mail" src={mailImg}></img>
            <a href={`mailto:${mail}?subject=Mail`} depuis portfolio>{mail}</a>
          </span>
          <span className="about-links" id="abbout-github">
            <img alt="github" src={githubImg}></img>
            <a href={github}>{github}</a>
          </span>
        </div>
      </div>

    </div>
  )
}

export { About };