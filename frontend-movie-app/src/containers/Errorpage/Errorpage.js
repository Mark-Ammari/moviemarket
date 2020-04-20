import React from 'react';
import classes from './Errorpage.module.css';
import error from '../../assets/route_error.svg';

export default function Errorpage() {
    return (
        <div className={classes.Errorpage}>
            <img src={error} alt="404-error"/>
        </div>
    );
};