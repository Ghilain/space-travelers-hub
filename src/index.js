import React from 'react';
import { BrowserRouter as Routers } from 'react-router-dom';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from './redux/ConfigureStore';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routers>
      <Provider store={store}>
        <App />
      </Provider>
    </Routers>
  </React.StrictMode>,
);
