import './projectpage.css';
import { Gallery } from '../components/Gallery';

const ProjectPage = (props) => {
  const { name, file, tools, description, pictures, date } = props.project;
  const path = require("../assets/" + file).default;
  return (
    <div className="projectpage">
      
      <div className="projectpage-cover">
        <h2 className="projectpage-title">{name.toUpperCase()}</h2>
        <img className="cover-img" alt="" src={path}></img>
      </div>
      
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
          <div className="info-list">
            {tools.map((tool, i) => <span key={`tool-${i}`}>{tool}</span>)}
          </div>
        </div>

        <div className="projectpage-desc" dangerouslySetInnerHTML={{__html: description}}></div>

      </div>

      <Gallery pictures={pictures} />

    </div>
  )
}

export { ProjectPage };