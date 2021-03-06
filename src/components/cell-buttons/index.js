import React from 'react';

import './cell-buttons.css';

const CloseButton = ({ onClick }) => {
    return (
        <div onClick={onClick} className="cell-button cell-close-button">
            <i className="fas fa-times"></i>
        </div>
    );
};

const RunButton = ({ onClick }) => {
    return (
        <div onClick={onClick} className="cell-button cell-run-button">
            <i className="fas fa-play"></i>
        </div>
    );
};

export { 
    CloseButton,
    RunButton
};
