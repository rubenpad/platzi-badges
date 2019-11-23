import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './routes/App';

const container = document.getElementById('app');

const renderize = () => ReactDOM.render(<App />, container);

renderize();

if (module.hot) {
  module.hot.accept(renderize, () => renderize());
}
