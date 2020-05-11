import React from 'react';
import classes from './ShowList.module.css';
import { useSelector } from 'react-redux';
import PosterCard from '../../../components/Cards/PosterCard/PosterCard';
import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';
import LoadingSkeletonPosterCard from '../../../components/Cards/LoadSkeletonPosterCard/LoadSkeletonPosterCard';
import PaginateList from '../../../components/PaginateList/PaginateList';

export default function ShowList({ current, goForward, goBack }) {
    const showList = useSelector(state => state.tvDiscover.discover);
    const error = useSelector(state => state.tvDiscover.error);
    const loading = useSelector(state => state.tvDiscover.loading)
    const filler = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

    return (
        <div className={classes.ShowListContainer}>
            <PaginateList
                goBack={goBack}
                goForward={goForward}
                current={current}
                total={showList["total_pages"]}
            />
            {error ? <ErrorWrapper width="1366px" height={215} />
                :
                <section className={classes.ShowListSection}>
                    {loading ?
                        filler.map((loading, key) => {
                            return <LoadingSkeletonPosterCard margin="auto" key={key} />
                        })
                        :
                        showList.results.map((showList, key) => {
                            return <PosterCard
                                margin="auto"
                                isSrc={showList.poster_path}
                                key={key}
                                id={showList.id}
                                type="show"
                                src={`https://image.tmdb.org/t/p/original${showList.poster_path}`}
                                title={showList.name || showList.title || showList["original_title"]}
                            />
                        })
                    }
                </section>
            }

        </div>
    )
}