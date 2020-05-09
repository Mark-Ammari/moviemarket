import React from 'react';
import classes from './LoadSkeletonAboutShow.module.css';

export default function LoadSkeletonAboutShow() {
    return (
        <div className={classes.LoadSkeletonAboutShow} >
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

