import './projectpage.css';
import { Gallery } from '../components/Gallery';
import { ReactComponent as Shape1 } from './../assets/utils/shape1.svg';
import { ReactComponent as Particle1 } from './../assets/utils/particle1.svg';
import { ReactComponent as Particle2 } from './../assets/utils/particle2.svg';
import { ReactComponent as Particle3 } from './../assets/utils/particle3.svg';
import { ReactComponent as Particle4 } from './../assets/utils/particle4.svg';
import { ReactComponent as Arrow } from './../assets/utils/arrow.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProjectPage = (props) => {
  const { name, file, tools, description, pictures, date, link } = props.project;
  const path = require("../assets/" + file).default;

  // const [showGallery, setShowGallery] = useState(false);

  useEffect(() => {
    document.querySelector('body').classList.remove('hide-overflow');
  }, []);

  return (
    <div className="projectpage">

      <div className="projectpage-wp">

        <h2 className="projectpage-title">{name}</h2>

        <div className="projectpage-info">

          {/* <div className="info-area" id="contributors">
    <span className="info-name">CONTRIBUTEURS</span>
    <div className="info-list">
      {contributors.map((contributor, i) => <span key={`contributor-${i}`} >{contributor}</span>)}
    </div>
  </div> */}

          <div className="info-area" id="date">
            <span className="info-name">ANNÉE</span>
            <span>{date}</span>
          </div>

          <div className="info-area" id="tools">
            <span className="info-name">OUTILS</span>
            {tools.map((tool, i) => <span key={`tool-${i}`}>{tool}</span>)}
          </div>
        </div>

        <div className="projectpage-desc" dangerouslySetInnerHTML={{ __html: description }}></div>

        <div className='projectpage-buttons'>
          {link && <a className="button" href={link} target='_blank'>Voir le projet</a>}
          {/* {pictures.length !== 0 && <button className="button" onClick={() => setShowGallery(true)}>Voir la galerie</button>} */}
        </div>

        <Gallery pictures={pictures} />

      </div>


      {/* {showGallery && <Gallery pictures={pictures} />} */}

      <Link to="/"><Arrow className="projectpage-back" /></Link>

    </div>
  )
}



export { ProjectPage };