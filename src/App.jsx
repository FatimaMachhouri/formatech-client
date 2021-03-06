import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Root from './components/home';
import MenuBar from './components/menubar';
import FormationDo from './components/formation-do';
import FormationIg from './components/formation-ig';
import Contact from './components/contact';
import Login from './components/login';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <MenuBar />
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/formation/ig">
          <FormationIg />
        </Route>
        <Route exact path="/formation/do">
          <FormationDo />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Root />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;