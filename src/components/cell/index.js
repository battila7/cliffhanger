import React from 'react';

import MarkdownCell from '../markdown-cell';
import XQueryCell from '../xquery-cell';

import './cell.css';

export default function Cell(props) {
    const cell = (props.view.type == MarkdownCell.TYPE) ? <MarkdownCell class='cell' {...props} /> : <XQueryCell {...props} />;

    return cell;
};

