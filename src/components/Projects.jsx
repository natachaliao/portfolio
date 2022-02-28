import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import { ReactComponent as Frame1 } from './../assets/utils/frame3.svg';

const Projects = (props) => {
  const { projects, setSelectedHeaderCateg } = props;

  return (
    <div id="projects">
      {projects.map((project) =>
        <Project key={`${project.order}-${project.name}`} project={project} setSelectedHeaderCateg={setSelectedHeaderCateg} />
      )}
    </div>
  )
}

const Project = (props) => {
  const { name, file, categories, route } = props.project;
  const { setSelectedHeaderCateg } = props;
  const path = require("../assets/" + file).default;
  const idName = name.replace(/\s/g, '-')

  const animateProject = () => {
    document.getElementById(`projprev-${idName}`).animate([
      { opacity: '0'},
      { opacity: '1'}
    ], {
      duration: 1000
    });
  }

  const addPattern = (svg, idName, patternToAdd) => {

    let id = `pattern-${idName}`;
    var svgNS = svg.namespaceURI;

    var pattern = document.createElementNS(svgNS, 'pattern');

    pattern.setAttributeNS(svgNS, 'patternUnits', 'userSpaceOnUse');
    pattern.id = id;
    pattern.style.width = '1200';
    pattern.style.height = '600';

    // var image = document.createElementNS(svgNS, 'image');
    // image.style.x = 0;
    // image.style.y = 0;
    // image.style.width = '1200';
    // image.style.height = '600';

    pattern.appendChild(patternToAdd);

    var defs = svg.querySelector('defs') ||
        svg.insertBefore(document.createElementNS(svgNS, 'defs'), svg.firstChild);

    svg.querySelector('path').style.fill = 'url(#' + id + ')';

    return defs.appendChild(pattern);
  }

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

  const createInfoOnHover = () => {
    (
      <div className="projprev-hover">
        <h3 className="projprev-title">{name}</h3>
        <div className="projprev-categories">
          {categories.map((category, index) => <span key={`projprev-category-${index}`}>{category}</span>)}
        </div>
      </div>
    )
  }

  useEffect(() => {
    animateProject();
    const svg = document.querySelector(`#frame-${idName}`)
    changePattern(svg, idName, path);
    
    // addPattern(svg, `info-${idName}`, createInfoOnHover());
  })

  return (
    <Link
      className="projprev"
      id={`projprev-${idName}`}
      to={`/${route}`}
      onClick={() => setSelectedHeaderCateg()}
    >

      <Frame1 className='frame' id={`frame-${idName}`} />

      <ProjectHover idName={idName} name={name} categories={categories} />

    </Link>
  )
}

const ProjectHover = (props) => {
  
  const { idName, name, categories } = props;

  const [ left, setLeft ] = useState(0);
  const [ top, setTop ] = useState(0);
  const [ width, setWidth ] = useState(0);
  const [ height, setHeight ] = useState(0);
  const [ transform, setTransform ] = useState('');

  const placeProjectHover = (id) => {
    const placeholder = document.querySelector(`#${id} .placeholder`);
    if(!placeholder) return
    const rect = placeholder.getBoundingClientRect();
    const { left, top, width, height } = rect;
    const transform = `translateY(${window.scrollY}px)`;
    setTransform(transform);
    setWidth(width);
    setHeight(height);
    setTop(top);
    setLeft(left);
  } 

  useEffect(() => {
    placeProjectHover(`projprev-${idName}`);
  }, [])

  useEffect(() => {
    window.addEventListener('resize', () => placeProjectHover(`projprev-${idName}`))
  })

  return (
    <div className="projprev-hover" style={{width: width, height: height, top: top, left: left, transform: transform}}>
      <h3 className="projprev-title">{name}</h3>
      <div className="projprev-categories">
        {categories.map((category, index) => <span key={`projprev-category-${index}`}>{category}</span>)}
      </div>
    </div>
  )
}

export { Projects };