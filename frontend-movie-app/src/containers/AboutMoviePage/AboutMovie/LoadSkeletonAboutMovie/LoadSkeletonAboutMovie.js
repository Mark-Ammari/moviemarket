import React from 'react';
import classes from './LoadSkeletonAboutMovie.module.css';

export default function LoadSkeletonAboutMovie() {
    return (
        <div className={classes.LoadSkeletonAboutMovie} >
            <div className={classes.LoadTitle}></div>
            <div className={classes.LoadDate}></div>

            <div className={classes.LoadDescription}></div>

            <div className={classes.LoadCatagories}></div>
            <div className={classes.LoadCSV}></div>

            <div className={classes.LoadCatagories}></div>
            <div className={classes.LoadCSV}></div>

            <div className={classes.LoadPosterCard}></div>
        </div >
    );
};

