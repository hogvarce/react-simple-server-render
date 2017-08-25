require('babel-register')({
	presets: ['es2015', 'react', 'stage-0'],
});

const express = require('express');
const app = express();
const port = 8080;

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const App = require('./src/App').default;

app.use(express.static('public'));

app.get('/', (request, response) => {
	const html = renderToString(React.createElement(App));
	response.send(html);
});

app.listen(port, () => {
	console.log(`server started on port ${port}!`);
});
