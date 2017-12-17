import React from 'react';

import ReactCodeMirror from 'react-codemirror'
import CodeMirror from 'codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/keymap/sublime'
import 'codemirror/addon/selection/active-line'

import ReactMarkdown from 'react-markdown';

import { CloseButton } from '../cell-buttons';

import './markdown-cell.css';

const editorOptions = {
    mode: 'markdown',
    keyMap: "sublime",
    lineWrapping: true,
    theme: 'md',
    placeholder: 'Type Markdown here...',
    showPredictions: false
};

const MarkdownCell = ({ updateView, view, close }) => {
    let cellLeft;

    if (!view.isInEditorMode) {
        cellLeft = (
            <div className='markdown-render' onDoubleClick={ () => updateView({ isInEditorMode: !view.isInEditorMode }) }>
                <ReactMarkdown source={view.contents} />
            </div>
        );
    } else {
        const extraKeys = {
            'Ctrl-Enter': () => updateView({ isInEditorMode: !view.isInEditorMode })
        };

        const options = Object.assign({}, editorOptions, { extraKeys });

        cellLeft = (
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

    return (
        <div className='cell-content-wrapper'>
            <div className='cell-left'>
                {cellLeft}
            </div>
            <div className='cell-right'>
                <CloseButton onClick={close}/>
            </div>
        </div>
    )
};

MarkdownCell.TYPE = 'markdown';

export default MarkdownCell;
