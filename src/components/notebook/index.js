import React from 'react';

import Footer from '../footer';
import Header from '../header';
import Workspace from '../workspace';

import './notebook.css'

export default function Notebook() {
    return (
        <div>
            <Header />
            <Workspace />
            <Footer />
        </div>
    );
};
