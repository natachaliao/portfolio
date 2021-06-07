import './App.css';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';
import { Homepage } from './homepage/Homepage';
import Header from './all/Header';
import { Contact } from './all/Contact';
import { ProjectPage } from './projects/ProjectPage';
import projects from './homepage/projects.json';
import { About } from './about/About';

function App() {
  return (
    <Router>
      <Switch>

        {projects.map(project => 
          <Route path={`/${project.route}`} key={`project-${project.order}`}>
            <Header name="Natacha Liao" />
            <ProjectPage project={project} />
            <Contact mail="natacha-liao@live.fr"/>
          </Route>
        )}

        <Route path="/apropos">
          <Header name="Natacha Liao" />
          <About/>
          <Contact mail="natacha-liao@live.fr"/>
        </Route>
        
        <Route>
          <Header name="Natacha Liao" />
          <Homepage />
          <Contact mail="natacha-liao@live.fr"/>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
