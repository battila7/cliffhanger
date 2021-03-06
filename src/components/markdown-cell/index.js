import React from 'react';

import ReactCodeMirror from '@skidding/react-codemirror'
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

const MarkdownCell = ({ beginDrag, close, updateView, view }) => {
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
            <div className="markdown-editor">
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
            <div className='cell-row'>
                <div className='cell-left'>
                    {cellLeft}
                </div>
                <div className='cell-right' onMouseDown={beginDrag}>
                    <CloseButton onClick={close}/>
                </div>
            </div>
        </div>
    )
};

MarkdownCell.TYPE = 'markdown';

export default MarkdownCell;
