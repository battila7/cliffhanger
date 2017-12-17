import React from 'react';

import BreadLoaf from 'breadloaf';

import Cell from '../cell';

import './workspace.css'

export default function Workspace(props, context) {
    const instance = Object.create(React.Component.prototype);

    instance.state = {
        layout: [
            {
                rowId: 1,
                items: [
                    {
                        id: 2,
                        type: 'markdown',
                        isInEditorMode: false,
                        contents: '# header\n**sample** *markdown* text'
                    },
                    {
                        id: 5,
                        type: 'markdown',
                        isInEditorMode: false,
                        contents: '# header\n**sample** *markdown* text'
                    }
                ]
            },
            {
                rowId: 2,
                items: [
                    {
                        id: 3,
                        type: 'markdown',
                        isInEditorMode: false,
                        contents: '**sample** *markdown* text'
                    }
                ]
            }
        ]
    };

    instance.props = props;
    instance.context = context;

    instance.updateLayout = function updateLayout(layout, trigger, view) {
        this.setState({
            layout
        });
    };

    instance.render = function render() {
        return (
            <div>
                <BreadLoaf 
                    element={<Cell />}
                    layout={this.state.layout}
                    updateLayout={this.updateLayout.bind(this)}
                />
            </div>
        );
    }

    return instance;
};
