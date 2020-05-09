import React from 'react';
import classes from './Review.module.css';
import emptyProfile from '../../../../assets/emptyprofile.webp';

export default function Review({ author, content }) {
    return (
        <div className={classes.Review}>
            <div className={classes.Author}>
                <img src={emptyProfile} alt="user review" />
                <p>{author}</p>
            </div>
            <div className={classes.Content}>
                <p>{content}</p>
            </div>
        </div>
    )
}