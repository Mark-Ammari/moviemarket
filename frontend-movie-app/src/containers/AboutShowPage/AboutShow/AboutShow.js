import React from 'react';
import { useSelector } from 'react-redux';
import classes from './AboutShow.module.css';
import LoadSkeletonAboutShow from './LoadSkeletonAboutShow/LoadSkeletonAboutShow';

export default function AboutShow() {
    const loadDetails = useSelector(state => state.tvDetails.loading)
    const details = useSelector(state => state.tvDetails.details)
    return (
        <div className={classes.DetailsContainer} >
            {loadDetails  ?
                <LoadSkeletonAboutShow />
                :
                <div className={classes.Details}>
                    <h3 className={classes.Title}>{details.name}</h3>
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

                    <div className={classes.KeywordsContainer}>
                        <p className={classes.Keywords}>Keywords:</p>
                        <div className={classes.KeysContainer}>
                            <p className={classes.Keys}>
                                {details.genres.map(keywords => {
                                    return keywords.name + ", "
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

