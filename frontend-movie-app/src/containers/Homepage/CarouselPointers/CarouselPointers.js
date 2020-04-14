import React from 'react';
import classes from './CarouselPointers.module.css';
import { IconButton, makeStyles } from '@material-ui/core';
import { ArrowLeftRounded, ArrowRightRounded } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        color: "#FFFFFF",
        textTransform: "unset",
        fontFamily: "Montserrat, sans-serif",
        margin: "0 10px",
        '&:hover': {
            backgroundColor: "rgba(46, 46, 46, 0.5)",
        },
    }
});

export default function CarouselPointers(props) {
    const styles = useStyles();
    return (
        <div className={classes.CarouselPointers}>
            <IconButton onClick={props.leftClick} className={styles.root}><ArrowLeftRounded /></IconButton>
            <IconButton onClick={props.rightClick} className={styles.root}><ArrowRightRounded /></IconButton>
        </div>
    )
}