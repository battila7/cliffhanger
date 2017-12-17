import React from 'react';

import MarkdownCell from '../markdown-cell';
import XQueryCell from '../xquery-cell';

import styles from './cell.css';

export default function Cell(props) {
    const cell = (props.view.type == MarkdownCell.TYPE) ? <MarkdownCell {...props} /> : <XQueryCell {...props} />;

    return (
        <div className='cell'>
            {cell}
        </div>
    )
};

