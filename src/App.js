import './App.css';
import { HashRouter as Router, Switch , Route } from 'react-router-dom';
import { Homepage } from './homepage/Homepage';
import Header from './all/Header';
import { Contact } from './all/Contact';
import { ProjectPage } from './projects/ProjectPage';
import projects from './homepage/projects.json';

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
