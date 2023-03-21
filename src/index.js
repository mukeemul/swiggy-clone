import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar'
import Card from './component/Card/Card';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Navbar />
        <Card />
        <Footer />
    </StrictMode>
);
