import React, { useState } from 'react';
import classes from './ReviewSection.module.css';
import { useSelector } from 'react-redux';
import Review from './Review/Review';

export default function ReviewSection() {
    const loadReviews = useSelector(state => state.movieReviews.loading);
    const reviews = useSelector(state => state.movieReviews.reviews);
    const error = useSelector(state => state.movieReviews.error);
    const [showMore, setShowMore] = useState(2)
    const showMoreHandler = () => {
        setShowMore(showMore + 2)
    }
    return (
        <div className={classes.ReviewSection}>
            {loadReviews ? null :
                <>
                    {reviews.results.length === 0 ? null :
                        <p>Reviews:</p>
                    }
                    {reviews.results.slice(0, showMore).map(review => {
                        return <Review
                            key={review.id}
                            author={review.author}
                            content={review.content}
                        />
                    })}
                    {showMore > reviews.results.length - 1 ? null :
                        <p className={classes.ShowMore} onClick={showMoreHandler}>Show More...</p>
                    }
                </>
            }
        </div>
    )
} 