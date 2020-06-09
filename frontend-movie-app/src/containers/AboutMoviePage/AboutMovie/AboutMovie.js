import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './AboutMovie.module.css';
import LoadSkeletonAboutMovie from './LoadSkeletonAboutMovie/LoadSkeletonAboutMovie';
import { useLocation } from 'react-router-dom';
import { addToFavorites, removeFromFavorites } from '../../../store/actions/authUser';
import SnackbarPopup from '../../../components/SnackbarPopup/SnackbarPopup';
import { FavoriteBorderRounded, FavoriteRounded } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

export default function AboutMovie() {
    const loadDetails = useSelector(state => state.movieDetails.loading)
    const details = useSelector(state => state.movieDetails.details)
    const dispatch = useDispatch()
    const location = useLocation()
    const [open, setOpen] = React.useState(false);
    const favorites = useSelector(state => state.favorites.favorites)
    const loadFavorites = useSelector(state => state.favorites.loading)

    const addFavorites = () => {
        setOpen(true);
        const indexOfSlash = location.pathname.slice(1).indexOf('/')
        dispatch(addToFavorites(details, location.pathname.slice(1, indexOfSlash + 1)))
    };

    const removeFavorites = () => {
        setOpen(true);
        dispatch(removeFromFavorites(details.id))
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.DetailsContainer} >
            {loadDetails && loadFavorites ?
                <LoadSkeletonAboutMovie />
                :
                <div className={classes.Details}>
                    <div className={classes.DetailsHeader}>
                        <h3 className={classes.Title}>{details.title}</h3>
                        {favorites.favorites.includes(details.id) ?
                            <SnackbarPopup
                                open={open}
                                severity="success"
                                onClose={handleClose}
                                button={
                                    <IconButton onClick={removeFavorites} size="small" color="secondary">
                                        <FavoriteRounded fontSize="small" color="error" />
                                    </IconButton>
                                }>
                                Removed Item from favorites.
                            </SnackbarPopup>
                            :
                            <SnackbarPopup
                                open={open}
                                severity="success"
                                onClose={handleClose}
                                button={
                                    <IconButton onClick={addFavorites} size="small" color="secondary">
                                        <FavoriteBorderRounded fontSize="small" color="error" />
                                    </IconButton>
                                }>
                                Item added to favorites.
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
};

