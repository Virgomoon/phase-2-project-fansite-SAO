import React, {useState} from "react";
import { Button } from "semantic-ui-react";
import "./css/Reviews.css"

function Reviews({reviewData, currentUser}){

    const [userReview, setUserReview] = useState("")

    function handleReviewChange(e) {
        setUserReview(
            ...userReview,
             e.target.value
          )
    }
    
    function handleReviewSubmit(e){
        e.preventDefault();
        let reviewToAdd = ({
        username: e.target.username,
        content: e.target.value,
        })

        fetch("https://backend-fansite-sao.herokuapp.com/reviews", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewToAdd),
            })
        .then((res)=> res.json())
        .then((newReview)=> console.log(newReview))
    }

    console.log(reviewData)
    const diplayReviews = reviewData.map((item)=>{
        return (
            <div key={item.id}>
                <span>{item.username}</span>
                <p>{item.content}</p>
            </div>
        )
    })

    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <form onSubmit={handleReviewSubmit} >
                <label>
                    Leave a review
                <textarea
                type="text"
                name="leave-review"
                user={currentUser}
                value={userReview.value}
                onChange={handleReviewChange}
                />
                </label>
                <Button type="submit">submit</Button>
            </form>
            {diplayReviews}
        </div>
        )
}

export default Reviews;