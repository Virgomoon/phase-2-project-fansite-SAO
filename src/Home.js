import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Home({isLoggedIn, searchData}){
    
    if (!isLoggedIn) return <Navigate to="/login" />;

const filteredData = searchData.filter((show) => show.title.toLowerCase().includes("Sword Art Online".toLowerCase()));

const movieList = filteredData.filter((media)=> media.type !== "TV")
const seriesList = filteredData.filter((media)=> media.type === "TV").sort((first, second)=> {
    if(first.mal_id > second.mal_id) {
        return 1
    } else if(first.mal_id < second.mal_id){
        return -1
    }
    return 0
});

console.log(seriesList)
console.log(movieList)

const fetchedData = seriesList.map((item)=> {
    return(
        <div key={item.mal_id}>
            <img src={item.images.jpg.image_url}></img>
            <h3>{item.title}</h3>
        </div>
    )
    })


return (
    <div>
        {fetchedData}
    </div>
)

}

export default Home