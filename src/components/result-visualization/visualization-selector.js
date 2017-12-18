import React from 'react';

import './visualization-selector.css';

export default function VisualizationSelector({ onSelect, selectedMode }) {
    const availableModes = [
        { mode: 'raw', icon: 'fa-file-alt' }        
    ];

    return (
        <div className='visualization-selector'>
            {
                availableModes.map(({ mode, icon }) => {
                    return (
                        <div key={mode} 
                             className={`cell-button visualization-button ${ selectedMode == mode ? 'selected' : '' }`}
                             onClick={onSelect.bind(null, mode)}
                        >
                            <i className={['fas', icon].join(' ')}></i>
                        </div>
                    );
                })
            }
        </div>
    );
};
