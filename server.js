require('babel-register')({
	presets: ['es2015', 'react', 'stage-0'],
    plugins: [
        "transform-decorators-legacy"
    ]
});

const express = require('express');
const app = express();
const port = 8080;

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('./src/App').default;

app.use(express.static('public'));

app.get('/', (request, response) => {
	const props = { title: 'Universal React application' };
	const html = renderToString(React.createElement(App, props));
	response.send(html);
});

app.listen(port, () => {
	console.log(`server started on port ${port}!`);
});
