import React, {useState, useEffect} from "react";
import { Button, Item } from "semantic-ui-react";
import "./css/Reviews.css"

function Reviews({reviewData, currentUser, setReviewData}){

    const [userReview, setUserReview] = useState("")

    function handleReviewChange(e) {
        setUserReview(
             e.target.value
          )
    }
    
    function handleReviewSubmit(e){
        e.preventDefault();
       
        setUserReview("")

        let newReview = ({
            username: currentUser,
            content: userReview,
        })
        // console.log(currentUser)
        // console.log(userReview)
        fetch("https://backend-fansite-sao.herokuapp.com/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
            })
        .then((res)=> res.json())
        .then((newRev)=> console.log(newRev))
    }

    useEffect(()=>{
        fetch("https://backend-fansite-sao.herokuapp.com/reviews")
        .then((res)=> res.json())
        .then((data)=> setReviewData(data))
      },[handleReviewSubmit]);

    // console.log(reviewData)

    function handleDelete(e){
        console.log(parseInt(e.target.parentNode.id));
        fetch(`https://backend-fansite-sao.herokuapp.com/reviews/${parseInt(e.target.parentNode.id)}`,{
            method:"DELETE",
        }).then(res => res.json())
        .then(result=> console.log(result))
    }

    const diplayReviews = reviewData.map((item)=>{
        return (
            <div key={item.id} id={item.id}>
            <Item>
                <Item.Header>{item.username}</Item.Header>
                <Item.Content>{item.content}</Item.Content>
            </Item>
            {currentUser === item.username? <button className="delete" onClick={handleDelete} >x</button> : null}
            </div>
        )
    })

    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <form className="form" onSubmit={handleReviewSubmit} >
                <label>
                    Leave a review
                </label>
                <textarea
                type="text"
                name="leave-review"
                user={currentUser}
                value={userReview}
                onChange={handleReviewChange}
                />
                <Button type="submit">submit</Button>
            </form>
            {diplayReviews}
        </div>
        )
}

export default Reviews;