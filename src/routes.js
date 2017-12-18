import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home';
import Notebook from './components/notebook';

const routes = (
    <Router>
        <Switch>
            <Route path='/' component={Home} />
            <Route path='/notebook' component={Notebook} />
        </Switch>
    </Router>
);

export default routes;
