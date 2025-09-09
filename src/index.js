import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
// import StoreContextProvider from './context/StoreContext.jsx';
const start = performance.now();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
    {console.log(`App loaded in ${performance.now() - start} ms`)}
  </BrowserRouter>
);

reportWebVitals();
