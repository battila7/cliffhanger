import React from 'react';

import ReactCodeMirror from '@skidding/react-codemirror'
import CodeMirror from 'codemirror';
import 'codemirror/mode/xml/xml';
import 'codemirror/lib/codemirror.css';

export default function RawVisualization({ results }) {
    const serializer = new XMLSerializer();

    const contents = serializer.serializeToString(results.documentElement);

    const options = {
        lineWrapping: true,
        mode: 'xml',
        theme: 'default',
        readOnly: true
    };

    return (
        <div>
            <ReactCodeMirror
                codeMirrorInstance={CodeMirror}
                options={options}
                value={contents}
            />
        </div>
    );
};
