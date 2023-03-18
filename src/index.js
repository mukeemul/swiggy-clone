import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './conponent/Navbar/Navbar';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Navbar />
    </StrictMode>
);
