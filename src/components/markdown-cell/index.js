import React from 'react';

import ReactCodeMirror from 'react-codemirror'
import CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/keymap/sublime'
import 'codemirror/addon/selection/active-line'

import ReactMarkdown from 'react-markdown';

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
            <div onClick={ () => updateView({ isInEditorMode: !view.isInEditorMode }) }>
                <ReactMarkdown source={view.contents} />
            </div>
        );
    } else {
        return (
            <ReactCodeMirror
                codeMirrorInstance={CodeMirror}
                onChange={ value =>  updateView({ contents: value }) }
                value={view.contents}
                options={editorOptions}
            />
        );
    }
};

MarkdownCell.TYPE = 'markdown';

export default MarkdownCell;
