import React from 'react';
import auth from '../hoc/auth';

const OpList = props => (
    <div>
        <h1 className="center">Secret Operative List</h1>
        <ol>
            <li>Corey</li>
            <li>Sam</li>
            <li>Mark</li>
            <li>Brett</li>
            <li>Andrew</li>
            <li>Scott</li>
            <li>Cody</li>
        </ol>
    </div>
);

export default auth(OpList);