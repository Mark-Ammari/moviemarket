import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from './AboutShow.module.css';
import LoadSkeletonAboutShow from './LoadSkeletonAboutShow/LoadSkeletonAboutShow';
import { FavoriteBorderRounded } from '@material-ui/icons';
import { addToFavorites } from '../../../store/actions/authUser';
import SnackbarPopup from '../../../components/SnackbarPopup/SnackbarPopup';
import { useRouteMatch, useLocation } from 'react-router-dom';

export default function AboutShow() {
    const loadDetails = useSelector(state => state.tvDetails.loading)
    const details = useSelector(state => state.tvDetails.details)
    const dispatch = useDispatch()
    const location = useLocation()
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
        const indexOfSlash = location.pathname.slice(1).indexOf('/')
        dispatch(addToFavorites(details, location.pathname.slice(1, indexOfSlash+1)))
    };
  
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div className={classes.DetailsContainer} >
            {loadDetails ?
                <LoadSkeletonAboutShow />
                :
                <div className={classes.Details}>
                    <div className={classes.DetailsHeader}>
                        <h3 className={classes.Title}>{details.name}</h3>
                        <SnackbarPopup
                            open={open}
                            severity="success"
                            onClick={handleClick}
                            onClose={handleClose}
                            size="small"
                            color="secondary"
                            icon={
                                <FavoriteBorderRounded fontSize="small" color="error" />
                            }>
                            Item added to favorites.
                        </SnackbarPopup>
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

