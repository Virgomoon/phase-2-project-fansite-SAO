import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import './css/App.css';
import Login from './Login'
import Navbar from './NavBar';
import Home from './Home';
import Characters from './Characters';
import Reviews from './Reviews';
import About from './About';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [searchData, setSearchData] = useState([])
    
    useEffect(() =>{
        fetch("https://api.jikan.moe/v4/anime?q=sword art online&sfw")
        .then((res)=> res.json())
        .then((data)=> setSearchData(data.data), console.log(searchData))
    }, []);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} 
        searchData={searchData} />} />
        <Route path='/Characters' element={<Characters />} />
        <Route path='/Reviews' element={<Reviews />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
