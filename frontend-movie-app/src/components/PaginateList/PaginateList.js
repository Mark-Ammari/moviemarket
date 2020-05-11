import React from 'react';
import classes from './PaginateList.module.css';
import { IconButton, makeStyles } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        color: "#FFFFFF",
        textTransform: "unset",
        fontFamily: "Montserrat, sans-serif",
        margin: "0 10px",
        background: "#3c3c3c",
        '&:hover': {
            backgroundColor: "rgba(46, 46, 46, 1)",
        },
    }
});

export default function PaginateList({ goBack, goForward, total, current }) {
    const styles = useStyles();
    return (
        <div className={classes.PaginateList} >
            <IconButton disabled={current === 1} className={styles.root} onClick={goBack}>
                <ChevronLeft />
            </IconButton>
            <p>{current}/{total}</p>
            <IconButton disabled={current === total} className={styles.root} onClick={goForward}>
                <ChevronRight />
            </IconButton>
        </div>
    );
};