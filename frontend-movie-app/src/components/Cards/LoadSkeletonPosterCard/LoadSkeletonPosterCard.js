import React from 'react';
import classes from './LoadSkeletonPosterCard.module.css';

export default function LoadSkeletonPosterCard(props) {
    return (
        <div style={{ margin: props.margin || '10px' }} className={classes.LoadingSkeletonPosterCardContainer}>
            <div className={classes.LoadingSkeletonPosterCard}>
            </div>
        </div>
    );
};