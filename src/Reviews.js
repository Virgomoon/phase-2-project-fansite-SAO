import React, {useState} from "react";
import { Button, Item } from "semantic-ui-react";
import "./css/Reviews.css"

function Reviews({reviewData, currentUser}){

    const [userReview, setUserReview] = useState("")

    function handleReviewChange(e) {
        setUserReview(
             e.target.value
          )
        //   console.log(userReview)
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

    // console.log(reviewData)
    const diplayReviews = reviewData.map((item)=>{
        return (
            <div key={item.id}>
            <Item>
                <Item.Header>{item.username}</Item.Header>
                <Item.Content>{item.content}</Item.Content>
            </Item>
            {currentUser === item.username? <Button>X</Button> : null}
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