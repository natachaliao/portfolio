import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';
import { ReactComponent as Frame1 } from './../assets/utils/frame2.svg';

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

  const changePattern = async (svg, idName, path) => {
    let id = `pattern-${idName}`;
    let pattern = svg.querySelector('pattern');
    pattern.setAttribute('id', id);

    let image = svg.querySelector('image');
    image.setAttribute('href', path);


    // Get width and height of image file

    let {width, height} = await getImageDimensions(path);

    console.log(idName)
    console.log('width = ', width)
    console.log('height = ', height)

    image.setAttribute("preserveAspectRatio", "xMidYMid slice");

    image.style.width = '100%';
    image.style.height = '100%';

    // if(width > height) {
    //   image.style.width = 'auto';
    //   image.style.height = '100%';
    // }
    // else {
    //   image.style.width = '100%';
    //   image.style.height = 'auto';
    // }

    let framedPicture = svg.querySelector('.placeholder');
    framedPicture.setAttribute('fill', 'url(#' + id + ')');
  }

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

      <Frame1 className='frame'id={`frame-${idName}`} />
      {/* <img src={Frame1bis} alt="React Logo" /> */}

      {/* <div className='inside-frame'>
        <img alt="" src={path}></img>
        
        <div className="projprev-hover">
          <h3 className="projprev-title">{name}</h3>
          <div className="projprev-categories">
            {categories.map((category, index) => <span key={`projprev-category-${index}`}>{category}</span>)}
          </div>
        </div>        
      </div> */}

    </Link>
  )
}


export { Projects };