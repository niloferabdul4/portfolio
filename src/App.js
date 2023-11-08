import React from 'react';
import Header from './Components/Header/header';
import Menubar from './Components/MenuBar/Menubar';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import ProjectsList from './Pages/ProjectsList/ProjectsList';

function App() {
    return (
      <div className="app">
        <Header />
        <Menubar />
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/projectslist' element={<ProjectsList/>} />
        </Routes>
      </div>
     
    );
}

export default App;
