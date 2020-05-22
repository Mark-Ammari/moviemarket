import React, { useEffect, useRef, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { List, IconButton, makeStyles, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import { SearchRounded, SubdirectoryArrowRight } from '@material-ui/icons';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import SelectTypeButton from './SelectTypeButton/SelectTypeButton';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTVSearch } from '../../store/actions/tv';
import { fetchMovieSearch } from '../../store/actions/movie';
import classes from './SearchModal.module.css';
import { useHistory } from 'react-router-dom';
import MobileLoader from '../Loader/MobileLoader';

const useStyles = makeStyles((theme) => ({
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
        background: "#000"

    },
    appBar: {
        position: 'relative',
        background: "#121212"

    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    listItem: {
        background: "#121212",
        '&:hover': {
            backgroundColor: "#151515",
        },
        margin: 0
    },
    divider: {
        background: "#F5C518"
    },
    icon: {
        color: "white"
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function SearchModal() {
    const styles = useStyles();
    const [open, setOpen] = React.useState(false);
    // const typeOfFilm = useSelector(state => state.typeOfFilm.typeOfFilm)
    const dispatch = useDispatch()
    const searchMovie = useSelector(state => state.movieSearch.search)
    const loadMovieSearch = useSelector(state => state.movieSearch.loading)
    const loadShowSearch = useSelector(state => state.tvSearch.loading)
    const searchShow = useSelector(state => state.tvSearch.search)
    const history = useHistory()

    function linkToFilm(typeOf, title, id) {
        handleClose()
        history.push({
            pathname: `/${typeOf}/${title.split(" ").join("-").toLowerCase()}/${id}`
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const ref = useRef()
    const [value, setValue] = useState("")
    const [show, setShow] = useState(false)
    const type = useSelector(state => state.typeOfFilm.typeOfFilm)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (value) {
                if (value === ref.current.value) {
                    setShow(true)
                    if (type === "movie") {
                        dispatch(fetchMovieSearch(value))
                    } else {
                        dispatch(fetchTVSearch(value))
                    }
                }
            } else {
                setShow(false)
            }
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    }, [value, type, dispatch])

    return (
        <div>
            <IconButton className={styles.root} variant="outlined" color="primary" onClick={handleClickOpen}>
                <SearchRounded />
            </IconButton>
            <Dialog classes={{
                paper: styles.paper
            }} fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={styles.appBar}>
                    <Toolbar>
                        <Typography variant="h6" className={styles.title}>
                            Find Your Favorite Movies and TV Series.
                        </Typography>
                        <IconButton edge="end" color="secondary" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <SelectTypeButton
                    ref={ref}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <List className={[classes.ModalListItem, !show ? classes.ModalListItemNone : ""].join(" ")}>
                    {type === "movie" ?
                        loadMovieSearch ? <MobileLoader /> :
                        searchMovie.results.length === 0 ? 
                            <div className={classes.NoSearchFound}>
                                <p>No Results Found.</p>
                            </div>
                            :
                            searchMovie.results.map(movie => {
                                return <div>
                                    <ListItem onClick={() => linkToFilm("movie", movie.name || movie["original_name"] || movie["original_title"], movie.id)} className={styles.listItem} button >
                                        <ListItemText className={classes.ListItemText} primary={movie.name || movie["original_name"] || movie["original_title"]} />
                                        <ListItemIcon><SubdirectoryArrowRight className={styles.icon} /></ListItemIcon>
                                    </ListItem>
                                    <Divider className={styles.divider} />
                                </div>
                            })
                        :
                        loadShowSearch ? <MobileLoader /> :
                            searchShow.results.length === 0 ? 
                            <div className={classes.NoSearchFound}>
                                <p>No Results Found.</p>
                            </div>
                            :
                            searchShow.results.map(show => {
                                return <div>
                                    <ListItem onClick={() => linkToFilm("show", show.name || show["original_name"] || show["original_title"], show.id)} className={styles.listItem} button >
                                        <ListItemText className={classes.ListItemText} primary={show.name || show["original_name"] || show["original_title"]} />
                                        <ListItemIcon><SubdirectoryArrowRight className={styles.icon} /></ListItemIcon>
                                    </ListItem>
                                    <Divider className={styles.divider} />
                                </div>
                            })
                    }
                </List>
            </Dialog>
        </div>
    );
}




