import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Notebook from './components/notebook';

const routes = (
    <Router>
        <Route path='/' component={Notebook} />
    </Router>
);

export default routes;
