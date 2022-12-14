import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import {AppProvider} from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppProvider>
        <App />
    </AppProvider>
);

