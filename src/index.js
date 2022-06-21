import React from 'react';
import { BrowserRouter as Routers } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers>
      <App />
    </Routers>
  </React.StrictMode>,
);
