import React from 'react';

import BreadLoaf from 'breadloaf';

import Cell from '../cell';

import MarkdownCell from '../markdown-cell';
import XQueryCell from '../xquery-cell';

import uuid from '../uuid';

import './workspace.css'

const AddCellArea = function AppendCellButton(props) {
    const instance = Object.create(React.Component.prototype);

    instance.props = props;

    instance.render = function render() {
        return (
            <div className="row-1" key="add-btn">
                <span>
                    <div className="bread-col">
                        <div className="add-cell-container">
                            <div className="add-cell-button" onClick={this.props.onClick.bind(null, XQueryCell.TYPE)}>
                                <span className="devicons devicons-code"></span>
                            </div>
                            <div className="add-cell-button" onClick={this.props.onClick.bind(null, MarkdownCell.TYPE)}>
                                <span className="devicons devicons-markdown"></span>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
        );
    };

    return instance;
};

export default function Workspace(props, context) {
    const instance = Object.create(React.Component.prototype);

    const defaultContents = {
        [MarkdownCell.TYPE]: '**Double-click** to edit, **Ctrl-Enter** to render.',
        [XQueryCell.TYPE]: 'XQuery'
    };

    instance.state = {
        layout: []
    };

    instance.props = props;
    instance.context = context;

    instance.updateLayout = function updateLayout(layout, trigger, view) {
        this.setState({
            layout
        });
    };

    instance.addCell = function addCell(type) {
        const cell = {
            id: uuid(),
            type,
            contents: defaultContents[type]
        };

        const row = {
            rowId: uuid(),
            items: [cell]
        };

        this.setState({
            layout: [...this.state.layout, row]
        });
    };

    instance.render = function render() {
        return (
            <div>
                <BreadLoaf 
                    element={<Cell />}
                    layout={this.state.layout}
                    updateLayout={this.updateLayout.bind(this)}
                    footer={<AddCellArea onClick={this.addCell.bind(this)}/>}
                />
            </div>
        );
    }

    return instance;
};
