import React from 'react';
import { HashRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Home from './components/home';
import Notebook from './components/notebook';

const routes = (
    <Router>
        <Switch>
            <Route path='/notebook' component={Notebook} />
            <Route path='/' component={withRouter(Home)} />
        </Switch>
    </Router>
);

export default routes;
