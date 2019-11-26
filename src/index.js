import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';
const container = document.getElementById('app');

function renderHMR() {
  return (
    ReactDOM.render(
      <App />,
      container,
    )
  );
}

renderHMR();

if (module.hot) {
  module.hot.accept(renderHMR, () => renderHMR());
}
