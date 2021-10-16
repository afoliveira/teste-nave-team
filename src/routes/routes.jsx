import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRouter from './privateRoutes';

import UserLogin from '../components/Forms/UserLogin';
import Home from '../screens/Home';
import AddUser from '../components/Forms/AddUser';

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={UserLogin} />
      <PrivateRouter path="/home" component={Home} />
      <PrivateRouter path="/add-user" component={AddUser} />
    </Switch>
  );
};

export default routes;
