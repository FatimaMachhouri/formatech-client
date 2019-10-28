import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Root from './components/home';
import MenuBar from './components/menubar';
import FormationDo from './components/formation-do';
import FormationIg from './components/formation-ig';
import Contact from './components/contact';

export default function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/candidater">
            <Candidater />
          </Route>
          <Route path="/formation/ig">
            <FormationIG />
          </Route>
          <Route path="/formation/do">
            <FormationDO />
          </Route>
          <Route path="/contact">
            <Contacts />
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

function FormationIG() {
  return <FormationIg />
}

function FormationDO() {
  return <FormationDo />;
}

function Contacts() {
  return <Contact />;
}