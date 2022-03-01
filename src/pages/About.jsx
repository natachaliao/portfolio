import portrait from '../assets/utils/portrait.png';
import mailImg from '../assets/utils/mail.png'
import './about.css';
import { useEffect } from 'react';
import { ReactComponent as Frame6 } from './../assets/utils/frame6.svg';
import { ReactComponent as Shape1 } from './../assets/utils/shape1.svg';
import { ReactComponent as Particle1 } from './../assets/utils/particle1.svg';
import { ReactComponent as Particle2 } from './../assets/utils/particle2.svg';
import { ReactComponent as Particle3 } from './../assets/utils/particle3.svg';
import { ReactComponent as Particle4 } from './../assets/utils/particle4.svg';

const About = (props) => {
  const { mail } = props;

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
    document.querySelector('body').classList.add("hide-overflow");
    const svg = document.querySelector(`#frame-portrait`);
    const path = require("../assets/utils/portrait.png").default;
    changePattern(svg, "portrait", path);
  }, [])

  return (
    <div className="about">
      <div className="about-wp">
        {/* <img className="portrait" alt="portrait" src={portrait}></img> */}
        <Frame6 id="frame-portrait"/>
        <div className="about-desc">
          <p>Actuellement en 3ème année d'école d'ingénieurs dans la formation IMAC (Informatique, Multimédia, Audiovisuel et Communication), j'aime le développement web, le design graphique et le motion design. Je cherche un stage en développement web de 4/6 mois à compter du 28 mars.</p>
          <span className="about-mail">
            <img alt="mail" src={mailImg}></img>
            <a href="mailto:natacha-liao@live.fr?subject=Mail depuis portfolio">{mail}</a>
          </span>
        </div>
      </div>

      <Background />

    </div>
  )
}

const Background = () => {
  return (
    <div className='bg'>
      <Shape1 style={{width: "300px", bottom: 0, left: 0, transform: 'translate(-50%, 50%)'}}/>
      <Shape1 style={{width: "300px", bottom: 0, right: 0, transform: 'translate(50%, 50%)'}}/>
      <Particle3 className="particle" style={{bottom: "23%", right: "23%"}} />
      <Particle3 className="particle" style={{top: "18%", right: "25%"}} />
      <Particle3 className="particle" style={{top: "14%", left: "34%"}} />
      <Particle1 className="particle" style={{top: "21%", right: "6%"}} />
      <Particle1 className="particle" style={{bottom: "3%", left: "51%"}} />
      <Particle1 className="particle" style={{bottom: "21%", left: "21%"}} />
      <Particle1 className="particle" style={{top: "7%", left: "45%"}} />
      <Particle1 className="particle" style={{top: "18%", left: "7%"}} />
      <Particle3 className="particle" style={{top: "71%", left: "8%"}} />
      <Particle3 className="particle" style={{top: "23%", left: "17%"}} />
      <Particle1 className="particle" style={{bottom: "3%", right: "19%"}} />
      <Particle1 className="particle" style={{top: "14%", right: "32%"}} />
    </div>
  )
}

export { About };