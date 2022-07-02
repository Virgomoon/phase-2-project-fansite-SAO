import React from "react";
import { Card } from "semantic-ui-react";
import "./css/Characters.css"

function Characters({firstChar}){

    function handleFullscreen(e){
        e.target.requestFullscreen()
    }

    const charData = firstChar.map((item)=> {
        return(
            <Card key={item.character.mal_id} >
                <img src={item.character.images.jpg.image_url} onClick={handleFullscreen} ></img>
                <h3>{item.character.name}</h3>
            </Card>
        )
        })

    return (
        <div className="characters">
            <p>Characters</p>
        <Card.Group itemsPerRow={3}>
            {charData}
        </Card.Group>
        </div>
        )
}

export default Characters;