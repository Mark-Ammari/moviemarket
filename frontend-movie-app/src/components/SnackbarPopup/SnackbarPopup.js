import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(5),
        },
    },
}));

export default function SnackbarPopup({ button, severity, children, onClose, open }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {button}
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={open} autoHideDuration={6000} onClose={onClose}>
                <Alert onClose={onClose} severity={severity}>
                    {children}
                </Alert>
            </Snackbar>
        </div>
    );
}