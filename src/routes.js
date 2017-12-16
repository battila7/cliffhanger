const React = require('react');
const { BrowserRouter, Route } = require('react-router-dom')

const Notebook = require('./components/notebook');

module.exports = (
    <BrowserRouter>
        <Route path='/' component={Notebook} />
    </BrowserRouter>
);
