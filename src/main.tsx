import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx';

const Root = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root /> 
  </React.StrictMode>,
  document.getElementById('root')
);
