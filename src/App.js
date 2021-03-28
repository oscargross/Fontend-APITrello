import React from 'react';

import { HashRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Navbar'

function App() {

  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
         
         
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
