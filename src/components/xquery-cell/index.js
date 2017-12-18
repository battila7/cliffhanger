import React from 'react';

import ReactCodeMirror from 'react-codemirror'
import CodeMirror from 'codemirror';
import 'codemirror/mode/xquery/xquery';
import 'codemirror/lib/codemirror.css';
import 'codemirror/keymap/sublime'

import ReactMarkdown from 'react-markdown';

import { CloseButton, RunButton } from '../cell-buttons';

import './xquery-cell.css';
import ResultVisualization from '../result-visualization';

const editorOptions = {
    mode: 'xquery',
    keyMap: 'sublime',
    theme: 'default',
    showPredictions: false
};

const XQueryEditor = ({ contents, runQuery, updateView }) => {
    const extraKeys = {
        'Ctrl-Enter': () => runQuery(contents, updateView)
    };

    const options = Object.assign({}, editorOptions, { extraKeys });

    return (
        <div className="xquery-editor">
            <ReactCodeMirror
                codeMirrorInstance={CodeMirror}
                onChange={ value =>  updateView({ contents: value }) }
                value={contents}
                options={options}
            />
        </div>
    );
};

const XQueryCell = ({ beginDrag, close, runQuery, updateView, view }) => {
    let visualization = null;

    if (view.results) {
        visualization = (
            <div className='cell-row visualization-row'>
                <div className='cell-left'>
                    <ResultVisualization results={view.results} mode={view.visualizationMode} />
                </div>
                <div className='cell-right' onMouseDown={beginDrag}>
                    <CloseButton onClick={close}/>
                </div>
            </div>
        );
    }

    return (
        <div className='cell-content-wrapper'>
            <div className='cell-row'>
                <div className='cell-left'>
                    <XQueryEditor contents={view.contents} updateView={updateView} />
                </div>
                <div className='cell-right xquery-controls' onMouseDown={beginDrag}>
                    <CloseButton onClick={close}/>
                    <RunButton onClick={ () => runQuery(view.contents, updateView) } />
                </div>
            </div>
            { visualization }
        </div>
    )
};

XQueryCell.TYPE = 'xquery';

export default XQueryCell;
