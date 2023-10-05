import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Route, Routes} from 'react-router-dom'

//Pages
import DefaultPage from './pages/DefaultPage';

//Components
import Nav from './components/Nav';



function App() {
  return (
    <div className="App">
      <Nav></Nav>

      <Routes>
        <Route path = "*" element={<DefaultPage/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
