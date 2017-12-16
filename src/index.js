const React = require('react');
const ReactDOM = require('react-dom');
const { createStore } = require('redux');
const { Provider } = require('react-redux');
const routes = require('./routes');

const store = createStore(() => null);

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('app')
);
