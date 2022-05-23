import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import './App.css';

// Components
import Home from "./Components/Home"
import About from "./Components/About"
import News from "./Components/News"
import SingleNew from './Components/SingleNew';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>News Letter</h1>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/news' element={<News />}>
            <Route path='/:id' element={<SingleNew/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
