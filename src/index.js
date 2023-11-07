import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Context } from './Components/Context/Context';
//import { FirebaseApp } from 'firebase/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      
        <Context>
        <App />  
        </Context>         
            
);

reportWebVitals();
