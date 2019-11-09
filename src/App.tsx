import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Root from './components/home';
import MenuBar from './components/menubar';
import FormationDo from './components/formation-do';
import FormationIg from './components/formation-ig';

export default function App() {
  return (
    <Router>
      <div>
        <MenuBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/candidater"/>
          <Route exact path="/formation/ig" component={FormationIg}/>
          <Route exact path="/formation/do"component={FormationDo}/>
          <Route exact path="/contact"/>
          <Route exact path="/" component={Root}/>
        </Switch>
      </div>
    </Router>
  );
}