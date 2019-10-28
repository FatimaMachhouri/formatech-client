import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Root from './components/home';
import FormationDo from './components/formation-do';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/candidater">
            <Candidater />
          </Route>
          <Route path="/formations">
            <Formations />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Root />;
}

function Candidater() {
  return null;
}

function Formations() {
  return <FormationDo />;
}

function Contact() {
  return null;
}