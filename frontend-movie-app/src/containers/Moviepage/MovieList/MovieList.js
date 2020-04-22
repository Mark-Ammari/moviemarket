import React from 'react';
import classes from './MovieList.module.css';
import { useSelector } from 'react-redux';
import PosterCard from '../../../components/Cards/PosterCard/PosterCard';

export default function MovieList() {
    const movieList = useSelector(state => state.movieDiscover.discover);
    const loading = useSelector(state => state.movieDiscover.loading)
    return (
        <div className={classes.MovieListContainer}>
            <section className={classes.MovieListSection}>
                {loading ? null :
                    movieList.results.map((movieList, key) => {
                        return <PosterCard
                            isSrc={movieList.poster_path}
                            key={key}
                            id={movieList.id}
                            type="movie"
                            src={`https://image.tmdb.org/t/p/original${movieList.poster_path}`}
                            title={movieList.name || movieList.title || movieList["original_title"]}
                        />
                    })
                }
            </section>
        </div>
    )
}