import React, { useContext } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import auth from '../../context/context';

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

export default function SnackbarPopup({ icon, color, size, onClick, severity, children, onClose, open }) {
    const classes = useStyles();
    const authContext = useContext(auth).isAuth
    return (
        <div className={classes.root}>
            <IconButton onClick={onClick} color={color} size={size}>
                {icon}
            </IconButton>
            {authContext ?
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open} autoHideDuration={6000} onClose={onClose}>
                    <Alert onClose={onClose} severity={severity}>
                        {children}
                    </Alert>
                </Snackbar>
                :
                <Dialog
                    open={open}
                    onClose={onClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">You must be signed in to add to favorites.</DialogTitle>
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Okay
                        </Button>
                        <Button onClick={onClose} color="secondary">
                            Cancel
                        </Button>
                    </DialogActions>
                </Dialog>
            }

        </div>
    );
}