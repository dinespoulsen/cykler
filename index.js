import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App.jsx"

if(typeof window !== 'undefined') {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
}
