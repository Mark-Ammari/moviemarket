import React from 'react';
import classes from './LoadMovieBackdrop.module.css';

export default function LoadMovieBackdrop() {
    return (
        <div className={classes.LoadMovieBackdropContainer}>
            <div className={classes.LoadMoviePoster}></div>
            <div className={classes.LoadMovieBackdrop}></div>
        </div>
    )
}