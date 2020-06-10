import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classes from './CastSection.module.css';
import CastMember from './CastMember/CastMember';
import LoadSkeletonCast from './LoadSkeletonCast/LoadSkeletonCast';
import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';
import { useParams } from 'react-router-dom';
import usePrevious from '../../../hooks/usePrevious';

export default function CastSection() {
    const { type } = useParams()
    return (
        <div>
            { type === "movie" ?
                <MovieCastSection />
                :
                <TVCastSection />
            }
        </div >
    );
};

const MovieCastSection = () => {
    const loadCredits = useSelector(state => state.movieCredits.loading)
    const credits = useSelector(state => state.movieCredits.credits)
    const error = useSelector(state => state.movieCredits.error)

    const [showMore, setShowMore] = useState(5)

    const { id } = useParams()
    const previous = usePrevious(id)

    const showMoreHandler = (length) => {
        setShowMore(length)
        document.querySelector("#showMoreCast").style.display = "none"
    }

    useEffect(() => {
        if (previous !== id) {
            setShowMore(5)
        }
    }, [previous, id])

    return (
        <div className={classes.CastSection} >
            {loadCredits ?
                <LoadSkeletonCast />
                :
                error ? <ErrorWrapper width="560px" height="416.6px" /> :
                    <>
                        {credits.cast.length === 0 ? null :
                            <>
                                <p className={classes.CastOverview}>Cast Overview:</p>
                                {credits.cast.slice(0, showMore).map(member => {
                                    return <CastMember
                                        key={member["cast_id"]}
                                        isSrc={member["profile_path"]}
                                        src={`https://image.tmdb.org/t/p/original${member["profile_path"]}`}
                                        character={member.character}
                                        name={member.name}
                                    />
                                })}
                                <p className={classes.ShowMore} onClick={() => showMoreHandler(credits.cast.length)} id="showMoreCast">Show More...</p>
                            </>
                        }
                    </>
            }
        </div >
    );
};

const TVCastSection = () => {
    const loadCredits = useSelector(state => state.tvCredits.loading)
    const credits = useSelector(state => state.tvCredits.credits)
    const error = useSelector(state => state.tvCredits.error)

    const [showMore, setShowMore] = useState(5)

    const { id } = useParams()
    const previous = usePrevious(id)

    const showMoreHandler = (length) => {
        setShowMore(length)
        document.querySelector("#showMoreCast").style.display = "none"
    }

    useEffect(() => {
        if (previous !== id) {
            setShowMore(5)
        }
    }, [previous, id])

    return (
        <div className={classes.CastSection} >
            {loadCredits ?
                <LoadSkeletonCast />
                :
                error ? <ErrorWrapper width="560px" height="416.6px" /> :
                    <>
                        {credits.cast.length === 0 ? null :
                            <>
                                <p className={classes.CastOverview}>Cast Overview:</p>
                                {credits.cast.slice(0, showMore).map(member => {
                                    return <CastMember
                                        key={member["cast_id"]}
                                        isSrc={member["profile_path"]}
                                        src={`https://image.tmdb.org/t/p/original${member["profile_path"]}`}
                                        character={member.character}
                                        name={member.name}
                                    />
                                })}
                                <p className={classes.ShowMore} onClick={() => showMoreHandler(credits.cast.length)} id="showMoreCast">Show More...</p>
                            </>
                        }
                    </>
            }
        </div >
    );
}