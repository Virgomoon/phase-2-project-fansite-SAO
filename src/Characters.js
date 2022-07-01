import React, { useState } from "react";
import { Card } from "semantic-ui-react";
import ItemHolder from "./ItemHolder";

function Characters({firstChar}){

    function handleFullscreen(e){
        e.target.requestFullscreen()
    }
    
    // function handleRedirect(url){
    //     window.open(`${url}`)
    //     console.log(url)
    // }

    console.log(firstChar)

    const charData = firstChar.map((item)=> {
        return(
            <Card key={item.character.mal_id} >
                <img src={item.character.images.jpg.image_url} onClick={handleFullscreen} ></img>
                <h3>{item.character.name}</h3>
            </Card>
        )
        })

    return (
        <>
            <p>Characters</p>
        <Card.Group itemsPerRow={3}>
            {charData}
        </Card.Group>
        </>
        )
}

export default Characters;