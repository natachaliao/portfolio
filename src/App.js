import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import { useState } from 'react';
import { Homepage } from './homepage/Homepage';
import Header from './all/Header';
import { Contact } from './all/Contact';
import { ProjectPage } from './projects/ProjectPage';
import projects from './homepage/projects.json';
import { About } from './about/About';

function App() {
  const [ selectedHeaderCateg, setSelectedHeaderCateg ] = useState("portfolio");
  const mail = "natacha-liao@live.fr";
  return (
    <Router>
      <Switch>

        {projects.map(project => 
          <Route path={`/${project.route}`} key={`project-${project.order}`}>
            <Header name="Natacha Liao" selectedHeaderCateg={selectedHeaderCateg} setSelectedHeaderCateg={setSelectedHeaderCateg}/>
            <ProjectPage project={project} />
            <Contact mail={mail}/>
          </Route>
        )}

        <Route path="/apropos">
          <Header name="Natacha Liao" selectedHeaderCateg={selectedHeaderCateg} setSelectedHeaderCateg={setSelectedHeaderCateg} />
          <About mail={mail} />
          <Contact mail={mail}/>
        </Route>
        
        <Route>
          <Header name="Natacha Liao" selectedHeaderCateg={selectedHeaderCateg} setSelectedHeaderCateg={setSelectedHeaderCateg} />
          <Homepage setSelectedHeaderCateg={() => setSelectedHeaderCateg(selectedHeaderCateg => "none")} />
          <Contact mail={mail}/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
