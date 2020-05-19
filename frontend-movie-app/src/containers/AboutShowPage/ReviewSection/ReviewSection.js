import React, { useState, useEffect } from 'react';
import classes from './ReviewSection.module.css';
import { useSelector } from 'react-redux';
import Review from './Review/Review';
import { useParams } from 'react-router-dom';
import usePrevious from '../../../hooks/usePrevious';

export default function ReviewSection() {
    const loadReviews = useSelector(state => state.tvReviews.loading);
    const reviews = useSelector(state => state.tvReviews.reviews);
    const error = useSelector(state => state.tvReviews.error);
    
    const [showMore, setShowMore] = useState(2)

    const { id } = useParams()
    const previous = usePrevious()

    const showMoreHandler = () => {
        setShowMore(showMore + 2)
    }

    useEffect(() => {
        if (previous !== id) {
            setShowMore(2)
        }
    }, [previous, id])

    return (
        <div className={classes.ReviewSection}>
            {loadReviews ? null :
                !reviews.results ? null :
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