// Okay, so I know, this is not the modular React-way of doing things
// but I was in sort of a hurry. For nicer code, check out the Notebook
// related parts.
import React from 'react';

import { connect } from '../connection';

import './home.css';

export default function Home({ history }) {
    const instance = Object.create(React.Component.prototype);

    instance.state = {
        host: '',
        username: '',
        password: ''
    };

    instance.modifyState = function modifyState(field, value) {
        const newState = Object.assign({}, this.state, { [field]: value });

        this.setState(newState);
    };

    instance.connect = function connect() {
        connect({
            uri: this.state.host,
            credentials: {
                username: this.state.username,
                password: this.state.password
            }
        });

        history.push('/notebook');
    };

    instance.render = function render() {
        return (
            <div className="home-container">
                <div className="background">
                </div>
                <div className="content">
                    <div className="cover">
                        <div className="home-top-bar">
                            <div className="centered-container">
                                <h1 className="home-title">Cliffhanger</h1>
                            </div>
                        </div>
                        <div className="home-controls-container">
                            <div className="home-controls-background">
                            </div>
                            <div className="home-controls-wrapper centered-container">
                                <div className="home-connection-box">
                                    <div className="connection-controls">
                                        <div className="connection-inputs">
                                            <div className="input-wrapper">
                                                <div className='input-label'>
                                                    <label htmlFor="host">Host</label>
                                                </div>
                                                <div className='input-container'>
                                                    <input
                                                        type='text'
                                                        name="host"
                                                        value={this.state.host}
                                                        onChange={e => this.modifyState.bind(this, 'host')(e.target.value)}
                                                        />
                                                </div>
                                            </div>
                                            <div className="input-wrapper">
                                                <div className='input-label'>
                                                    <label htmlFor="username">Username</label>
                                                </div>
                                                <div className='input-container'>
                                                    <input
                                                        type='text'
                                                        name="username"
                                                        value={this.state.username}
                                                        onChange={e => this.modifyState.bind(this, 'username')(e.target.value)}
                                                        />
                                                </div>
                                            </div>
                                            <div className="input-wrapper">
                                                <div className='input-label'>
                                                    <label htmlFor="password">Password</label>
                                                </div>
                                                <div className='input-container'>
                                                    <input
                                                        type='password'
                                                        name="password"
                                                        value={this.state.password}
                                                        onChange={e => this.modifyState.bind(this, 'password')(e.target.value)}
                                                        />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="connection-button">
                                            <button onClick={this.connect.bind(this)}>Connect to eXist</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="home-slogan-box">
                                    <h1 className='slogan-title'>Designed for XQuery</h1>
                                    <h2 className='slogan-subtitle'>Cliffhanger is a notebook-environment inspired by Franchise, providing a better way to explore your XML data.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="home-spacer">
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return instance;
};
