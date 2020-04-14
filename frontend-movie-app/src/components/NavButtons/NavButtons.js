import React from 'react';
import classes from './NavButtons.module.css';
import { makeStyles, useMediaQuery, IconButton, Button } from '@material-ui/core';
import { AddBoxRounded, OpenInNewRounded } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    root: {
        color: "#FFFFFF",
        textTransform: "unset",
        fontFamily: "Montserrat, sans-serif",
        marginRight: "10px",
        '&:hover': {
            backgroundColor: "#2E2E2E",
        },
    }
}));

export default function NavButtons(props) {
    const styles = useStyles();
    const matches = useMediaQuery('(min-width:501px)');
    return (
        <nav className={classes.NavButtons}>
            {matches ?
                <>
                    <Button className={styles.root} startIcon={<AddBoxRounded />}>Wishlist</Button>
                    <Button className={styles.root} startIcon={<OpenInNewRounded />}>Sign in</Button>
                </>
                :
                <>
                    <IconButton className={styles.root} ><AddBoxRounded /></IconButton>
                    <IconButton className={styles.root} ><OpenInNewRounded /></IconButton>
                </>
            }
        </nav>
    );
};