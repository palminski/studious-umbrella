import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom'

//Pages
import DefaultPage from './pages/DefaultPage';
import About from './pages/About';
import ForParents from './pages/ForParents';
import ForSchools from './pages/ForSchools';

//Components
import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
      <Nav></Nav>

      <Routes>
        
        <Route path = "*" element={<DefaultPage/>}></Route>
        <Route path = "/about" element={<About/>}></Route>
        <Route path = "/for-schools" element={<ForSchools/>}></Route>
        <Route path = "/for-parents" element={<ForParents/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
