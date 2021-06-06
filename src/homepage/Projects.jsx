import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './projects.css';

const Projects = (props) => {
  const { projects } = props;

  return (
    <div id="projects">
      {projects.map((project) =>
        <Project key={`${project.order}-${project.name}`} project={project} />
      )}
    </div>
  )
}

const Project = (props) => {
  const { name, file, categories, route } = props.project;
  const path = require("../assets/" + file).default;

  const animateProject = () => {
    document.getElementById(`projprev-${name}`).animate([
      { opacity: '0'},
      { opacity: '1'}
    ], {
      duration: 1000
    });
  }

  useEffect(() => {
    animateProject();
  })

  return (
    <Link
      className="projprev"
      id={`projprev-${name}`}
      to={`/${route}`}
    >
      <img alt="" src={path}></img>

      <div className="projprev-hover">
        <h3 className="projprev-title">{name}</h3>
        <div className="projprev-categories">
          {categories.map((category, index) => <span key={`projprev-category-${index}`}>{category}</span>)}
        </div>
      </div>
    </Link>
  )
}


export { Projects };