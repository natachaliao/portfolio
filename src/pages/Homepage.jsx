import { Categories } from './../components/Categories.jsx';
import { Projects } from './../components/Projects.jsx';
import categories from './../data/categories.json';
import projects from './../data/projects.json';
import './homepage.css';
import { useState } from 'react';
import { ReactComponent as Shape1 } from './../assets/utils/shape1.svg';


const Homepage = (props) => {
  
  const { setSelectedHeaderCateg } = props;
  // Fied "categories" in array "projects" is id, replace it with corresponding name
  const replaceIdByCategory = (array) => {
    const res = array.map(id => {
      let i = 0;
      while(Number.isInteger(id)){
        if(i === categories.length) {
          console.error("no category corresponding to id " + id);
          break;
        }
        if(categories[i].id === id) {
          id = categories[i].name;
        }
        i++;
      };
      return id;
    })
    return res;
  }
  projects.forEach(project => {
    project.categories = replaceIdByCategory(project.categories);
  });
  
  // Handle categories selection
  const [ selectedCateg, setSelectedCateg ] = useState("Tout");
  const projectsOfSelectedCategories = (selectedCategory, projects) => {
    if(selectedCategory === "Tout") return projects;
    return projects.filter(project => {
      for(let i=0; i<project.categories.length; i++) {
        if(project.categories[i] === selectedCategory) return true;
      }
      return false;
    })
  }
  
  return (
    <div id="homepage">
      <Categories 
        categories={categories} 
        selectedCateg={selectedCateg}
        setSelectedCateg={category => setSelectedCateg(selectedCateg => category)} 
      />
      {/* <ScrollIndication /> */}
      <Projects projects={projectsOfSelectedCategories(selectedCateg, projects)} setSelectedHeaderCateg={setSelectedHeaderCateg}/>
      <Background />
    </div>
  )
}

const ScrollIndication = () => {
  return (
    <div className='scroll-indication'>
      <h2>Scroll</h2>
    </div>
  );
}

const Background = () => {
  return (
    <div className='bg'>
      <Shape1 style={{width: "300px", bottom: 0, left: 0, transform: 'translate(-50%, 50%)'}}/>
      <Shape1 style={{width: "300px", bottom: 0, right: 0, transform: 'translate(50%, 50%)'}}/>

    </div>
  )
}

export { Homepage };