import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Adm from '../pages/Adm/adm';
import MinhaConta from '../pages/MinhaConta/minhaConta';



const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/Adm" component={Adm} />
      <Route path="/MinhaConta" component={MinhaConta} />

    </Switch>
  );
}

export default Routes;
