import React from 'react';
import classes from './MovieList.module.css';
import { useSelector } from 'react-redux';
import PosterCard from '../../../components/Cards/PosterCard/PosterCard';
import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';
import LoadingSkeletonPosterCard from '../../../components/Cards/LoadSkeletonPosterCard/LoadSkeletonPosterCard';
import PaginateList from '../../../components/PaginateList/PaginateList';
import { useParams } from 'react-router-dom';

export default function MovieList({ goForward, goBack, current }) {
    const { type } = useParams()
    return (
        <div>
            {type === "movies" ?
                <ListOfMovies
                    goForward={goForward}
                    goBack={goBack}
                    current={current}
                />
                :
                <ListOfShows
                    goForward={goForward}
                    goBack={goBack}
                    current={current}
                />
            }
        </div>
    )
}

const ListOfMovies = ({ goForward, goBack, current }) => {
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

const ListOfShows = ({ goForward, goBack, current }) => {
    const tvList = useSelector(state => state.tvDiscover.discover);
    const error = useSelector(state => state.tvDiscover.error);
    const loading = useSelector(state => state.tvDiscover.loading)
    const filler = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return (
        <div className={classes.MovieListContainer}>
            <PaginateList
                goForward={goForward}
                goBack={goBack}
                current={current}
                total={tvList["total_pages"]}
            />
            {error ? <ErrorWrapper width="1366px" height={215} />
                :
                <section className={classes.MovieListSection}>
                    {loading ?
                        filler.map((loading, key) => {
                            return <LoadingSkeletonPosterCard margin="auto" key={key} />
                        })
                        :
                        tvList.results.map((tvList, key) => {
                            return <PosterCard
                                margin="auto"
                                isSrc={tvList.poster_path}
                                key={key}
                                id={tvList.id}
                                type="movie"
                                src={`https://image.tmdb.org/t/p/original${tvList.poster_path}`}
                                title={tvList.name || tvList.title || tvList["original_title"]}
                            />
                        })
                    }
                </section>
            }
        </div>
    )
}