import './App.css';
import { HashRouter as Router, Switch , Route } from 'react-router-dom';
import { useState } from 'react';
import { Homepage } from './pages/Homepage';
import Header from './components/Header';
import { Contact } from './components/Contact';
import { ProjectPage } from './pages/ProjectPage';
import projects from './data/projects.json';
import { About } from './pages/About';
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';

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
          </Route>
        )}

        <Route path="/apropos">
          <Header name="Natacha Liao" selectedHeaderCateg={selectedHeaderCateg} setSelectedHeaderCateg={setSelectedHeaderCateg} />
          <About mail={mail} />
          <Contact mail={mail}/>
        </Route>

        <Route path="/test3">
          <Test3 />
        </Route>

        <Route exact path="/">
          <Header name="Natacha Liao" selectedHeaderCateg={selectedHeaderCateg} setSelectedHeaderCateg={setSelectedHeaderCateg} />
          <Homepage setSelectedHeaderCateg={() => setSelectedHeaderCateg(selectedHeaderCateg => "none")} />
          {/* <Contact mail={mail}/> */}
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
