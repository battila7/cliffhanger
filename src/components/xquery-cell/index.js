import React from 'react';

import ReactCodeMirror from 'react-codemirror'
import CodeMirror from 'codemirror';
import 'codemirror/mode/xquery/xquery';
import 'codemirror/lib/codemirror.css';
import 'codemirror/keymap/sublime'

import ReactMarkdown from 'react-markdown';

import { CloseButton, RunButton } from '../cell-buttons';

import { ClipLoader } from 'halogen';

import './xquery-cell.css';
import ResultVisualization from '../result-visualization';

const Spinner = () => {
    return (
        <div className='executing-spinner'>
            <ClipLoader color='#dbca60' size='0.85rem' /> 
        </div>
    );
};

const XQueryEditor = ({ contents, run, updateView }) => {
    const extraKeys = {
        'Ctrl-Enter': run
    };

    const defaultOptions = {
        mode: 'xquery',
        keyMap: 'sublime',
        theme: 'default',
        showPredictions: false
    };

    const options = Object.assign({}, defaultOptions, { extraKeys });

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
    function executeQuery() {
        if (!view.isExecuting) {
            updateView({ isExecuting: true });

            return runQuery(view.contents, updateView);
        }
    }

    function render() {
        return (
            <div className='cell-content-wrapper'>
                <div className='cell-row'>
                    <div className='cell-left'>
                        <XQueryEditor run={executeQuery} contents={view.contents} updateView={updateView} />
                    </div>
                    <div className='cell-right xquery-controls' onMouseDown={beginDrag}>
                        <CloseButton onClick={close}/>
                        { view.isExecuting ?
                            <Spinner /> : <RunButton onClick={executeQuery} />
                        }
                        
                    </div>
                </div>
                { view.results &&
                <div className='cell-row visualization-row'>
                    <div className='cell-left'>
                        <ResultVisualization results={view.results} mode={view.visualizationMode} />
                    </div>
                    <div className='cell-right' onMouseDown={beginDrag}>
                        <CloseButton onClick={close}/>
                    </div>
                </div>
                }
            </div>
        )
    }

    return render();
};

XQueryCell.TYPE = 'xquery';

export default XQueryCell;
