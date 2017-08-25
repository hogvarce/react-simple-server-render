import React, { Component } from 'react';

export default class App extends Component {
    onHandleClick() {
        alert('asdas');
    }
    render() {
        return (
            <html>
            <head>
                <title>Isomorph</title>
                <link rel="stylesheet" href="/styles/main.css" />
            </head>
            <body>
            <div>
                <h1>React App!</h1>
                <button onClick={this.onHandleClick}>click me</button>
            </div>
            <script src="/bundle.js" />
            </body>
            </html>
        );
    }
}
