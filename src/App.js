import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProjectsList from './Pages/ProjectsList/ProjectsList';

function App() {
    return (
      <div className="app">
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/projectslist' element={<ProjectsList/>} />
        </Routes>
      </div>
     
    );
}

export default App;
