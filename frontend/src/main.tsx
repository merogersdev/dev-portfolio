import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import ReduxProvider from './redux/provider.tsx';
import App from './App.tsx';
import './globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <Router>
        <App />
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
);