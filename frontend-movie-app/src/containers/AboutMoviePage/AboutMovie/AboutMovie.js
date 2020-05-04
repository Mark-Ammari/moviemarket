import React from 'react';
import { useSelector } from 'react-redux';
import classes from './AboutMovie.module.css';

export default function AboutMovie() {
    const loadDetails = useSelector(state => state.movieDetails.loading)
    const details = useSelector(state => state.movieDetails.details)
    return (
        <div className={classes.DetailsContainer} >
            {loadDetails ? null :
                <div className={classes.Details}>
                    <h3 className={classes.Title}>{details.title}</h3>
                    <p className={classes.Date}>{details["release_date"]}</p>
                    <p className={classes.Overview}>{details.overview}</p>
                    <div className={classes.CatagoriesContainer}>
                        <p className={classes.Catagories}>Catagories:</p>
                        <div className={classes.GenresContainer}>
                            <p className={classes.Genres}>
                                {details.genres.map(genres => {
                                    return genres.name + ", "
                                })}
                            </p>
                        </div>
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

