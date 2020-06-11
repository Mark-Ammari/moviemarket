import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './AboutMovie.module.css';
import LoadSkeletonAboutMovie from './LoadSkeletonAboutMovie/LoadSkeletonAboutMovie';
import { useLocation, useParams } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../../../store/actions/authUser';
import SnackbarPopup from '../../../components/SnackbarPopup/SnackbarPopup';
import { FavoriteRounded, FavoriteBorderRounded } from '@material-ui/icons';
import { IconButton, Dialog, DialogTitle, DialogActions, Button } from '@material-ui/core';
import auth from '../../../context/context';

export default function AboutMovie() {
    const { type } = useParams()

    return (
        <div>
            {type === "movie" ?
                <MovieDetails />
                :
                <TVDetails />
            }
        </div>
    )
};

const MovieDetails = () => {
    const loadDetails = useSelector(state => state.movieDetails.loading)
    const details = useSelector(state => state.movieDetails.details)

    const dispatch = useDispatch()
    const location = useLocation()

    const [openSnackbar, setOpenSnackbar] = React.useState(false)
    const [openDialog, setOpenDialog] = React.useState(false);
    const loadFavorites = useSelector(state => state.favorites.loading)
    const favorites = useSelector(state => state.favorites.favorites)
    const authContext = useContext(auth).isAuth

    const addFavorites = () => {
        setOpenSnackbar(true);
        const indexOfSlash = location.pathname.slice(1).indexOf('/')
        dispatch(addToFavorites(details, location.pathname.slice(1, indexOfSlash + 1)))
    };

    const removeFavorites = () => {
        setOpenSnackbar(true);
        dispatch(removeFromFavorites(details.id))
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <div className={classes.DetailsContainer} >
            {loadDetails ?
                <LoadSkeletonAboutMovie />
                :
                <div className={classes.Details}>
                    <div className={classes.DetailsHeader}>
                        <h3 className={classes.Title}>{details.title}</h3>
                        {loadFavorites ? null :
                            <SnackbarPopup
                                open={openSnackbar}
                                onClose={handleClose}
                                severity="success"
                                button={
                                    !authContext ?
                                        <>
                                            <IconButton onClick={() => setOpenDialog(true)} size="small" color="secondary">
                                                <FavoriteBorderRounded fontSize="small" color="error" />
                                            </IconButton>
                                            <Dialog
                                                open={openDialog}
                                                onClose={() => setOpenDialog(false)}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">You must be signed in to add to favorites.</DialogTitle>
                                                <DialogActions>
                                                    <Button onClick={() => setOpenDialog(false)} color="primary">
                                                        Okay
                                                </Button>
                                                    <Button onClick={() => setOpenDialog(false)} color="secondary">
                                                        Cancel
                                                </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </>
                                        :
                                        favorites.favorites.some(el => el.id === details.id) ?
                                            <IconButton onClick={removeFavorites} size="small" color="secondary">
                                                <FavoriteRounded fontSize="small" color="error" />
                                            </IconButton>
                                            :
                                            <IconButton onClick={addFavorites} size="small" color="secondary">
                                                <FavoriteBorderRounded fontSize="small" color="error" />
                                            </IconButton>
                                }>
                                {!authContext ? null :
                                    favorites.favorites.some(el => el.id === details.id) ?
                                        "Added Item to Favorites." : "Removed Item from Favorites."
                                }
                            </SnackbarPopup>
                        }
                    </div>
                    <p className={classes.Date}>{details["release_date"]}</p>
                    <p className={classes.Overview}>{details.overview}</p>

                    <div className={classes.CatagoriesContainer}>
                        <p className={classes.Catagories}>Catagories:</p>
                        {!details.genres ? <p className={classes.NoList}>No genres listed.</p> :
                            <div className={classes.GenresContainer}>
                                {details.genres.length === 0 ? null :
                                    <p className={classes.Genres}>
                                        {details.genres.map(genres => {
                                            return genres.name + ", "
                                        })}
                                    </p>
                                }
                            </div>
                        }
                    </div>

                    <div className={classes.KeywordsContainer}>
                        <p className={classes.Keywords}>Keywords:</p>
                        {!details.genres ? <p className={classes.NoList}>No Keywords listed.</p> :
                            <div className={classes.KeysContainer}>
                                {details.genres.length === 0 ? null :
                                    <p className={classes.Keys}>
                                        {details.genres.map(keywords => {
                                            return keywords.name + ", "
                                        })}
                                    </p>
                                }
                            </div>
                        }
                    </div>

                    <div className={classes.PosterCard}>
                        <img
                            src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
                            alt="Poster Card" />
                        <div className={classes.PosterDetails}>
                            <h5>{details.tagline}</h5>
                            <a rel="noopener noreferrer" target="_blank" href={details.homepage}>
                                Visit Company Website
                            </a>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
}

const TVDetails = () => {
    const loadDetails = useSelector(state => state.tvDetails.loading)
    const details = useSelector(state => state.tvDetails.details)

    const dispatch = useDispatch()
    const location = useLocation()

    const [openSnackbar, setOpenSnackbar] = React.useState(false)
    const [openDialog, setOpenDialog] = React.useState(false);
    const loadFavorites = useSelector(state => state.favorites.loading)
    const favorites = useSelector(state => state.favorites.favorites)
    const authContext = useContext(auth).isAuth

    const addFavorites = () => {
        setOpenSnackbar(true);
        const indexOfSlash = location.pathname.slice(1).indexOf('/')
        dispatch(addToFavorites(details, location.pathname.slice(1, indexOfSlash + 1)))
    };

    const removeFavorites = () => {
        setOpenSnackbar(true);
        dispatch(removeFromFavorites(details.id))
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <div className={classes.DetailsContainer} >
            {loadDetails ?
                <LoadSkeletonAboutMovie />
                :
                <div className={classes.Details}>
                    <div className={classes.DetailsHeader}>
                        <h3 className={classes.Title}>{details.name}</h3>
                        {loadFavorites ? null :
                            <SnackbarPopup
                                open={openSnackbar}
                                onClose={handleClose}
                                severity="success"
                                button={
                                    !authContext ?
                                        <>
                                            <IconButton onClick={() => setOpenDialog(true)} size="small" color="secondary">
                                                <FavoriteBorderRounded fontSize="small" color="error" />
                                            </IconButton>
                                            <Dialog
                                                open={openDialog}
                                                onClose={() => setOpenDialog(false)}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">You must be signed in to add to favorites.</DialogTitle>
                                                <DialogActions>
                                                    <Button onClick={() => setOpenDialog(false)} color="primary">
                                                        Okay
                                                </Button>
                                                    <Button onClick={() => setOpenDialog(false)} color="secondary">
                                                        Cancel
                                                </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </>
                                        :
                                        favorites.favorites.some(el => el.id === details.id) ?
                                            <IconButton onClick={removeFavorites} size="small" color="secondary">
                                                <FavoriteRounded fontSize="small" color="error" />
                                            </IconButton>
                                            :
                                            <IconButton onClick={addFavorites} size="small" color="secondary">
                                                <FavoriteBorderRounded fontSize="small" color="error" />
                                            </IconButton>
                                }>
                                {!authContext ? null :
                                    favorites.favorites.some(el => el.id === details.id) ?
                                        "Added Item to Favorites." : "Removed Item from Favorites."
                                }
                            </SnackbarPopup>
                        }
                    </div>
                    <p className={classes.Date}>{details["release_date"] || details["first_air_date"]}</p>
                    <p className={classes.Overview}>{details.overview}</p>

                    <div className={classes.CatagoriesContainer}>
                        <p className={classes.Catagories}>Catagories:</p>
                        {!details.genres ? <p className={classes.NoList}>No genres listed.</p> :
                            <div className={classes.GenresContainer}>
                                {details.genres.length === 0 ? null :
                                    <p className={classes.Genres}>
                                        {details.genres.map(genres => {
                                            return genres.name + ", "
                                        })}
                                    </p>
                                }
                            </div>
                        }
                    </div>

                    <div className={classes.KeywordsContainer}>
                        <p className={classes.Keywords}>Keywords:</p>
                        {!details.genres ? <p className={classes.NoList}>No Keywords listed.</p> :
                            <div className={classes.KeysContainer}>
                                {details.genres.length === 0 ? null :
                                    <p className={classes.Keys}>
                                        {details.genres.map(keywords => {
                                            return keywords.name + ", "
                                        })}
                                    </p>
                                }
                            </div>
                        }
                    </div>

                    <div className={classes.PosterCard}>
                        <img
                            src={`https://image.tmdb.org/t/p/original${details.poster_path}`}
                            alt="Poster Card" />
                        <div className={classes.PosterDetails}>
                            <h5>{details.tagline}</h5>
                            <a rel="noopener noreferrer" target="_blank" href={details.homepage}>
                                Visit Company Website
                            </a>
                        </div>
                    </div>
                </div>
            }
        </div >
    );
}