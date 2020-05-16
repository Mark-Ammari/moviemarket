import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { IconButton, makeStyles } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import SearchBar from '../SearchBar/SearchBar';

const useStyles = makeStyles(() => ({
    root: {
        color: "#FFFFFF",
        textTransform: "unset",
        fontFamily: "Montserrat, sans-serif",
        marginRight: "10px",
        '&:hover': {
            backgroundColor: "#2E2E2E",
        },
    },
    paper: {
        height: "500px"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function SearchModal() {
    const styles = useStyles()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton className={styles.root} onClick={handleClickOpen}>
                <SearchRounded />
            </IconButton>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"Search For Your Favorite Movies and Shows."}</DialogTitle>
                <DialogContent className={styles.paper}>
                    <SearchBar />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}