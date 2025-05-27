import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp.jsx';
import './styles.css';
import { CounterApp } from './CounterApp.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value= {0} />
    </React.StrictMode>
)