import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Card } from "semantic-ui-react";

function Home({isLoggedIn, searchData, setItemDataState}){
    
    const history = useNavigate()
    if (!isLoggedIn) return <Navigate to="/login" />;


const filteredData = searchData.filter((show) => show.title.toLowerCase().includes("Sword Art Online".toLowerCase()));

const seriesList = filteredData.filter((media)=> media.type === "TV").sort((first, second)=> {
    if(first.mal_id > second.mal_id) {
        return 1
    } else if(first.mal_id < second.mal_id){
        return -1
    }
    return 0
});

async function renderSeries(e){
    let itemInfo = seriesList.filter((show)=> show.mal_id.toString() === e.target.parentNode.id)

    setItemDataState(itemInfo)
    
  history('/ItemHolder')
}

const fetchedData = seriesList.map((item)=> {
    return(
        <Card key={item.mal_id} id={item.mal_id}  onClick={renderSeries}>
            <img src={item.images.jpg.image_url}></img>
            <h3>{item.title}</h3>
        </Card>
    )
    })

return (
    <Card.Group className="home" itemsPerRow={3}>
        {fetchedData}
    </Card.Group>
)

}

export default Home