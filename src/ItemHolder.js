import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './css/ItemHolder.css'
import { Item, Button } from "semantic-ui-react";

function ItemHolder({itemDataState}){
    
    const history = useNavigate()

        let newData = (
            <>
            <Item>
                <Item.Image size="tiny" src={itemDataState[0].images.jpg.image_url}/>
    
                <Item.Content>
                <Item.Header as='a'>{itemDataState[0].title}</Item.Header>
                <Item.Meta>Synopsis</Item.Meta>
                </Item.Content>
                <Item.Description>
                    {itemDataState[0].synopsis}
                </Item.Description>
                <Item.Extra>{itemDataState[0].rating}</Item.Extra>
            </Item>
            <Button onClick={()=> history("/")}>Go Back</Button>
            </>
        )

    return (
        <>
        <div className="item-holder">
            {newData}
        </div>
        </>
    )
}

export default ItemHolder