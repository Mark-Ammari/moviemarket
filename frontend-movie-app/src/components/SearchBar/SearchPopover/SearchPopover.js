import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { MovieRounded, TvRounded, KeyboardArrowDownOutlined } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { setTypeShow, setTypeMovie } from '../../../store/actions/trending';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 40,
        flex: 1,
        maxWidth: 10,
    },
}));

function SearchPopover() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const changeTypeToShow = () => {
        dispatch(setTypeShow())
        setAnchorEl(null);
    }
    const changeTypeToMovie = () => {
        dispatch(setTypeMovie())
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button className={classes.root} aria-describedby={id} onClick={handleClick}>
                <KeyboardArrowDownOutlined />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <List>
                    <ListItem onClick={changeTypeToMovie} button>
                        <ListItemText primary="Movies" />
                        <ListItemSecondaryAction>
                            <MovieRounded className={classes.icon} />
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem onClick={changeTypeToShow} button>
                        <ListItemText primary="Shows" />
                        <ListItemSecondaryAction>
                            <TvRounded className={classes.icon} />
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Popover>
        </div>
    );
}

export default SearchPopover