import React, {useState, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
import './css/App.css';
import Login from './Login'
import Navbar from './NavBar';
import Home from './Home';
import Characters from './Characters';
import Reviews from './Reviews';
import About from './About';
import ItemHolder from './ItemHolder';
import SignUp from './SignUp';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("")

  const [searchData, setSearchData] = useState([])
  const [firstChar, setFirstChar] = useState([])
  const [reviewData, setReviewData] = useState([])

  const [itemDataState, setItemDataState] = useState([])
  
    
    useEffect(() =>{
        fetch("https://api.jikan.moe/v4/anime?q=sword art online&sfw")
        .then((res)=> res.json())
        .then((data)=> setSearchData(data.data))
    }, []);

    useEffect(() =>{
      fetch("https://api.jikan.moe/v4/anime/11757/characters")
      .then((res)=> res.json())
      .then((data)=> setFirstChar(data.data))
  }, []);

    useEffect(()=>{
      fetch("https://backend-fansite-sao.herokuapp.com/reviews")
      .then((res)=> res.json())
      .then((data)=> setReviewData(data))
    },[]);

  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Home isLoggedIn={isLoggedIn} 
        searchData={searchData} setItemDataState={setItemDataState} />} />
        <Route path='/Characters' element={<Characters firstChar={firstChar} />} />
        <Route path='/Reviews' element={<Reviews reviewData={reviewData} currentUser={currentUser} setReviewData={setReviewData} />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />} />
        <Route path='/ItemHolder' element={<ItemHolder itemDataState={itemDataState} />}/>
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
