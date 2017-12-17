import React from 'react';

import ReactCodeMirror from 'react-codemirror'
import CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/keymap/sublime'
import 'codemirror/addon/selection/active-line'

import ReactMarkdown from 'react-markdown';

import './markdown-cell.css';

const editorOptions = {
    mode: 'markdown',
    keyMap: "sublime",
    lineWrapping: true,
    theme: 'md',
    placeholder: 'Type Markdown here...',
    showPredictions: false
};

const MarkdownCell = ({ updateView, view }) => {
    if (!view.isInEditorMode) {
        return (
            <div className='markdown-render' onDoubleClick={ () => updateView({ isInEditorMode: !view.isInEditorMode }) }>
                <ReactMarkdown source={view.contents} />
            </div>
        );
    } else {
        const extraKeys = {
            'Ctrl-Enter': () => updateView({ isInEditorMode: !view.isInEditorMode })
        };

        const options = Object.assign({}, editorOptions, { extraKeys });

        return (
            <div>
                <ReactCodeMirror
                    codeMirrorInstance={CodeMirror}
                    onChange={ value =>  updateView({ contents: value }) }
                    value={view.contents}
                    options={options}
                />
            </div>
        );
    }
};

MarkdownCell.TYPE = 'markdown';

export default MarkdownCell;
