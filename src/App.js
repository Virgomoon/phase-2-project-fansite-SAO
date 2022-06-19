import React, {useState} from 'react';
import { Route, Routes } from "react-router-dom";
import './css/App.css';
import Login from './Login'
import Navbar from './NavBar';
import Home from './Home';
import Anime from './Anime';
import Manga from './Manga';
import Characters from './Characters';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path='/Anime' element={<Anime />} />
        <Route path='/Manga' element={<Manga />} />
        <Route path='/Characters' element={<Characters />} />
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
