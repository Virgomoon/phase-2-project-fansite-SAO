import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function Characters({firstChar}){

    const charData = firstChar.map((item)=> {
        return(
            <Card key={item.character.mal_id}>
                <img src={item.character.images.jpg.image_url}></img>
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