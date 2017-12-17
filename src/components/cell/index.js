import React from 'react';

import MarkdownCell from '../markdown-cell';
import XQueryCell from '../xquery-cell';

export default function Cell(props) {
    const cell = (props.view.type == MarkdownCell.TYPE) ? <MarkdownCell {...props} /> : <XQueryCell {...props} />;

    return cell;
};

