import React from 'react';
import { render } from 'react-dom';

import App from 'App';

const props = window.PROPS;

render(
    <App {...props} />,
    document,
);
