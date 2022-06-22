import React, { useState } from "react";

function Characters({firstChar}){

    const charData = firstChar.map((item)=> {
        return(
            <div key={item.character.mal_id}>
                <img src={item.character.images.jpg.image_url}></img>
                <h3>{item.character.name}</h3>
            </div>
        )
        })

    return (
        <div>
            <p>Characters</p>
            {charData}
        </div>
        )
}

export default Characters;