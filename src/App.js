import './App.css';
import { HashRouter as Router, Switch , Route } from 'react-router-dom';
import { useState } from 'react';
import projects from './data/projects.json';
import { Homepage } from './pages/Homepage';
import Header from './components/Header';
import { Contact } from './components/Contact';
import { ProjectPage } from './pages/ProjectPage';
import { About } from './pages/About';
import Background from './components/Background';

function App() {
  const [ selectedHeaderCateg, setSelectedHeaderCateg ] = useState("portfolio");
  const mail = "natacha-liao@live.fr";
  const github = "https://github.com/Natachaliao32";
  return (
    <Router>
      <Switch>

        {projects.map(project => 
          <Route path={`/${project.route}`} key={`project-${project.order}`}>
            <div className='page'>
              <Header name="Natacha Liao" selectedHeaderCateg={selectedHeaderCateg} setSelectedHeaderCateg={setSelectedHeaderCateg}/>
              <ProjectPage project={project} setSelectedHeaderCateg={setSelectedHeaderCateg} />
              <Background n={2} />
            </div>
          </Route>
        )}

        <Route path="/apropos">
          <div className='page'>
            <Header name="Natacha Liao" selectedHeaderCateg={selectedHeaderCateg} setSelectedHeaderCateg={setSelectedHeaderCateg} />
            <About mail={mail} github={github} />
            <Background n={3} />
          </div>
        </Route>

        <Route exact path="/">
          <div className='page'>
            <Header name="Natacha Liao" selectedHeaderCateg={selectedHeaderCateg} setSelectedHeaderCateg={setSelectedHeaderCateg} />
            <Homepage setSelectedHeaderCateg={() => setSelectedHeaderCateg(selectedHeaderCateg => "none")} />
            <Background n={1} />
          </div>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
