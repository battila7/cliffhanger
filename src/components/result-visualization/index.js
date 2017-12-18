import React from 'react';

import ErrorVisualization from './error-visualization';
import RawVisualization from './raw-visualization';

import './visualization.css'

const visualizationMap = {
    'raw': (results, settings) => <RawVisualization results={results} {...settings} />
};

const ResultVisualization = ({ isError, results, settings, updateView }) => {
    function selectVisualization() {
        if (isError) {
            return <ErrorVisualization results={results} />
        }

        const visualizationFactory = visualizationMap[settings.mode];

        if (visualizationFactory) {
            return visualizationFactory(results, settings);
        } else {
            return <ErrorVisualization results={ new Error('Please select a visualization mode!') } />;
        }
    }

    return (
        <div className='visualization-container'>
            { selectVisualization() }
        </div>
    );
};

export default ResultVisualization;
