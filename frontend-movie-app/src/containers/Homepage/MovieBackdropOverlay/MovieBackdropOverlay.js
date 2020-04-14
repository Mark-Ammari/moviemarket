import React from 'react';
import classes from './MovieBackdropOverlay.module.css';
import { Typography, makeStyles, useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        color: "#FFF",
        margin: "0 10px"
    },
    root2: {
        color: "#FFF",
        margin: "0 10px",
        fontSize: "10pt"
    }
});

export default function MovieBackdropOverlay(props) {
    const styles = useStyles();
    const matches = useMediaQuery('(min-width:1366px)');

    return (
        <div className={classes.MovieBackdropOverlay}>
            {matches ?
                <>
                    <div>
                        <Typography variant="h4" className={styles.root}>{props.name}</Typography>
                        <Typography variant="h6" className={styles.root}>&middot;</Typography>
                        <Typography variant="h6" className={styles.root}>{props.rating}/10</Typography>
                    </div>
                    <Typography className={styles.root}>{props.description}</Typography>
                </>
                :
                null
            }
        </div>
    );
};
