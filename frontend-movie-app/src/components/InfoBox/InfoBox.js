import React from 'react';
import classes from './InfoBox.module.css';

export default function InfoBox(props) {
    return (
        <div className={classes.InfoBox}>
            <h1>{props.heading}</h1>
            <div>
                <h4>{props.title}</h4>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
};