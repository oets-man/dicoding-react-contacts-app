// eslint-disable-next-line no-unused-vars
import React from "react";
import {createRoot} from 'react-dom/client'
import App from './ContactApp';
// import App from './CounterApp';
import './style.css'

const root = createRoot(document.getElementById('root'));
root.render(<App/>)
