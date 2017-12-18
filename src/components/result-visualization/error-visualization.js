import React from 'react';

import './error-visualization.css';

export default function ErrorVisualization({ results }) {
    return (
        <div className='error-visualization-container'>
            <div className='sadness-container'>
                <div className='frown'>
                    <i className="far fa-frown"></i>
                </div>
                <div className='error-description'>
                    { results.toString() }
                </div>
            </div>
        </div>
    );
};
