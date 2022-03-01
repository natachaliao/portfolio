import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import { ReactComponent as Frame1 } from './../assets/utils/frame5.svg';

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

  const scrollHorizontally = () => {
    const scrollContainer = document.querySelector("#homepage");
    scrollContainer.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY * 0.05;
    });
  }

  const chooseFrame = () => {
    
  }

  useEffect(() => {
    scrollHorizontally();
  }, [])

  useEffect(() => {
    animateProject();
    const svg = document.querySelector(`#frame-${idName}`)
    changePattern(svg, idName, path);
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

  const placeProjectHover = (id) => {
    const placeholder = document.querySelector(`#${id} .placeholder`);

    if(!placeholder) return;
    const rect = placeholder.getBoundingClientRect();
    const { left, top, width, height } = rect;

    console.log(placeholder);
    console.log("placeholder: " + left + " / " + top);

    setWidth(width);
    setHeight(height);
    setTop(top + window.scrollY);
    setLeft(left + window.scrollX);

    if(placeholder.tagName === "ellipse") {
      const elmnt = document.querySelector(`#${id} .projprev-hover`);
      elmnt.style.clipPath = "ellipse()";
    }
  }

  const clipPath = (id) => {
    const placeholder = document.querySelector(`#${id} .placeholder`);
    if(!placeholder) return;
    const cx = placeholder.cx.baseVal.value;
    const cy = placeholder.cy.baseVal.value;
    const rx = placeholder.rx.baseVal.value;
    const ry = placeholder.ry.baseVal.value;
    const tag = placeholder.tagName;
    console.log('x = ', cx, " y = ", cy, " rx = ", rx, " ry = ", ry, " tag : ", tag);
    
    if(tag === "ellipse") {
      // const clip = `${tag}(${rx}px ${ry}px at ${cx}px ${cy}px)`; 
      // console.log(clip);
      const elmnt = document.querySelector(`#${id} .projprev-hover`);
      // console.log(elmnt);
      elmnt.style.clipPath = "ellipse()";
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => placeProjectHover(`projprev-${idName}`));
    const scrollContainer = document.querySelector("#homepage");
    scrollContainer.addEventListener("wheel", () => {
      setTimeout(function(){
        placeProjectHover(`projprev-${idName}`)
      },1);
    });
  }, [])

  useEffect(() => {
    placeProjectHover(`projprev-${idName}`);
  })

  return (
    <div className="projprev-hover" style={{width: width, height: height, top: top, left: left}}>
      <h3 className="projprev-title">{name}</h3>
      <div className="projprev-categories">
        {categories.map((category, index) => <span key={`projprev-category-${index}`}>{category}</span>)}
      </div>
    </div>
  )
}

export { Projects };