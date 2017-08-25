import React, { Component } from 'react';
import autoBind from 'autobind-decorator';

export default class App extends Component {
    @autoBind
    onHandleClick() {
        const { title } = this.props;
        alert(title);
    }

    render() {
        const { title } = this.props;
        return (
            <html>
            <head>
                <title>{title}</title>
                <link rel="stylesheet" href="/styles/main.css" />
            </head>
            <body>
            <div>
                <h1>{title}</h1>
                <button onClick={this.onHandleClick}>click me</button>
            </div>
            <script dangerouslySetInnerHTML={{
                __html: 'window.PROPS=' + JSON.stringify(this.props)
            }} />
            <script src="/bundle.js" />
            </body>
            </html>
        );
    }
}
