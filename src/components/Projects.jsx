import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import { ReactComponent as Frame1 } from './../assets/utils/frame3.svg';
import { ReactComponent as Frame2 } from './../assets/utils/frame2.svg';
import { ReactComponent as Frame3 } from './../assets/utils/frame3.svg';
import { ReactComponent as Frame4 } from './../assets/utils/frame4.svg';
import { ReactComponent as Frame5 } from './../assets/utils/frame5.svg';
import { ReactComponent as Frame6 } from './../assets/utils/frame6.svg';

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
  const idName = name.replace(/\s/g, '-');

  const [ frame, setFrame ] = useState(<Frame1 className='frame' id={`frame-${idName}`} />);

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
    const scrollArea = document.querySelector("#homepage");
    const scrollContainer = document.querySelector("#projects");
    scrollArea.addEventListener("wheel", (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY * 0.05;
    });
  }

  const getImageDimensions = (path) => {
    return new Promise(resolve => {
      let width; let height;
      let file = new Image();
      file.onload = function() {
        width = file.width;
        height = file.height;
        resolve({width, height});
      };
      file.src = path;
    })
  }

  const chooseFrame = async () => {
    const frames = {
      horizontal: [
        <Frame1 className='frame frame-hr' id={`frame-${idName}`} />,
        <Frame2 className='frame frame-hr' id={`frame-${idName}`} />,
        <Frame3 className='frame frame-hr' id={`frame-${idName}`} />
      ],
      vertical: [
        <Frame4 className='frame frame-vr' id={`frame-${idName}`} />,
        <Frame5 className='frame frame-vr' id={`frame-${idName}`} />,
        <Frame6 className='frame frame-vr' id={`frame-${idName}`} />
      ]
    }

    const { width, height } = await getImageDimensions(path);

    let frame;
    if(width > height) {
      frame = frames.horizontal[Math.floor(Math.random()*frames.horizontal.length)];
    }
    else {
      frame = frames.vertical[Math.floor(Math.random()*frames.vertical.length)];
    }
    setFrame(frame);
  }

  const positionFrames = () => {
    const scrollArea = document.querySelector("#projects");
    if(!scrollArea) return;
    if(scrollArea.scrollWidth > scrollArea.clientWidth) {
      scrollArea.setAttribute('style', 'justify-content: flex-start');
    }
    else {
      scrollArea.setAttribute('style', 'justify-content: center');
    }
  }

  useEffect(() => {
    scrollHorizontally();
    chooseFrame();
  }, [])

  useEffect(() => {
    animateProject();
    const svg = document.querySelector(`#frame-${idName}`)
    changePattern(svg, idName, path);
    positionFrames();
  })

  return (
    <Link
      className="projprev"
      id={`projprev-${idName}`}
      to={`/${route}`}
      onClick={() => setSelectedHeaderCateg()}
    >
    {frame}
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

    setWidth(width);
    setHeight(height);
    setTop(top + window.scrollY);
    setLeft(left + window.scrollX);

    if(placeholder.tagName === "ellipse") {
      const elmnt = document.querySelector(`#${id} .projprev-hover`);
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