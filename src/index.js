import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Context } from './Components/Context/Context';
import { BrowserRouter } from 'react-router-dom';
//import { FirebaseApp } from 'firebase/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
        <Context>
        <App />  
        </Context>         
         </BrowserRouter>   
);

reportWebVitals();
