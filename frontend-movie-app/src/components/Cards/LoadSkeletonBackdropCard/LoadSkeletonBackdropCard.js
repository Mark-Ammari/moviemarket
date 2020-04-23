import React from 'react';
import classes from './LoadSkeletonBackdropCard.module.css';

export default function LoadSkeletonBackdropCard(props) {
    return (
        <div style={{ margin: props.margin || '10px' }} className={classes.SkeletonBackdropCardContainer}>
            <div className={classes.SkeletonBackdropCard}></div>
            <div className={classes.SkeletonText}></div>
        </div>
    );
};