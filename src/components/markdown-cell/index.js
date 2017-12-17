import React from 'react';

const MarkdownCell = ({ updateView, view }) => {
    return (
        <textarea 
            onChange={ event => updateView({ contents: event.target.value }) }
            value={view.contents} />
    );
};

MarkdownCell.TYPE = 'markdown';

export default MarkdownCell;
