import React from 'react';
import classes from './MovieList.module.css';
import { useSelector } from 'react-redux';
import PosterCard from '../../../components/Cards/PosterCard/PosterCard';
import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';
import LoadingSkeletonPosterCard from '../../../components/Cards/LoadSkeletonPosterCard/LoadSkeletonPosterCard';
import PaginateList from '../../../components/PaginateList/PaginateList';

export default function MovieList({ goForward, goBack, current }) {
    const movieList = useSelector(state => state.movieDiscover.discover);
    const error = useSelector(state => state.movieDiscover.error);
    const loading = useSelector(state => state.movieDiscover.loading)
    const filler = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <div className={classes.MovieListContainer}>
            <PaginateList
                goForward={goForward}
                goBack={goBack}
                current={current}
                total={movieList["total_pages"]}
            />
            {error ? <ErrorWrapper width="1366px" height={215} />
                :
                <section className={classes.MovieListSection}>
                    {loading ?
                        filler.map((loading, key) => {
                            return <LoadingSkeletonPosterCard margin="auto" key={key} />
                        })
                        :
                        movieList.results.map((movieList, key) => {
                            return <PosterCard
                                margin="auto"
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
            }
        </div>
    )
}