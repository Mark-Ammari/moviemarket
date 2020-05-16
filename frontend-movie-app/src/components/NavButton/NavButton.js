import React from 'react';
import classes from './NavButton.module.css';
import { makeStyles, useMediaQuery, IconButton, Button } from '@material-ui/core';

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

export default function NavButton({children, startIcon, ...props}) {
    const styles = useStyles();
    const matches = useMediaQuery('(min-width:767px)');
    return (
        <nav className={classes.NavButtons}>
            {matches ?
                <>
                    <Button className={styles.root} startIcon={startIcon} {...props}>{children}</Button>
                </>
                :
                <>
                    <IconButton className={styles.root} {...props}>{startIcon}</IconButton>
                </>
            }
        </nav>
    );
};