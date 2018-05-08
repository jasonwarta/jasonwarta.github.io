import React from 'react';

import { Frame } from './components';

import sites from './sites.js';

export default class App extends React.Component {
    render() {
        return 
        <div>
            {
                sites.map((site) => (<Frame src={site} />))
            }    
        </div>
    }
}