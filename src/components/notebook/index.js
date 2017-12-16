const React = require('react');

const MarkdownCell = require('../markdown-cell');
const XQueryCell = require('../xquery-cell');

const Notebook = function Notebook(props, context) {
    const instance = Object.create(React.Component.prototype);

    instance.state = {
        cells: []
    };

    instance.props = props;
    instance.context = context;

    instance.addCell = function addMarkdownCell(type) {
        this.setState({
            cells: [...this.state.cells, { type }]
        });
    };

    instance.render = function render() {
        const cells = this.state.cells.map(toComponent);

        return (
            <div>
                <h1>Notebook</h1>
                <div>
                    {cells}
                </div>
                <button onClick={this.addCell.bind(this, MarkdownCell.TYPE)}>New Markdown Cell</button>
                <button onClick={this.addCell.bind(this, XQueryCell.TYPE)}>New XQueryCell</button>
            </div>
        );

        function toComponent(cell, index) {
            if (cell.type == XQueryCell.TYPE) {
                return <XQueryCell key={index} {...cell} />
            } else {
                return <MarkdownCell key={index} {...cell} />
            }
        }
    }

    return instance;
};

module.exports = Notebook;
