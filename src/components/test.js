import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './test.css';

const test = () => {
    return (
        <div>
            <h1>Hello</h1>
            <Link to={'/login'}>to login</Link>
        </div>
    );
}

export default test;