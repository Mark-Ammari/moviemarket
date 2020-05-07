import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './CastSection.module.css';
// import FilmSection from '../../../components/FilmSection/FilmSection';
// import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';
// import EmptyListWrapper from '../../../components/EmptyListWrapper/EmptyListWrapper';
import CastMember from './CastMember/CastMember';
import InfoBox from '../../../components/InfoBox/InfoBox';
import LoadSkeletonCast from './LoadSkeletonCast/LoadSkeletonCast';
import ErrorWrapper from '../../../components/ErrorWrapper/ErrorWrapper';

export default function CastSection() {
    const loadCredits = useSelector(state => state.movieCredits.loading)
    const credits = useSelector(state => state.movieCredits.credits)
    const error = useSelector(state => state.movieCredits.error)
    const [showMore, setShowMore] = useState(5)

    const showMoreHandler = (length) => {
        setShowMore(length)
        document.querySelector("#showMoreCast").style.display = "none"
    }
    return (
        <div className={classes.CastSection} >
            {loadCredits ?
                <LoadSkeletonCast />
                :
                error ? <ErrorWrapper width="560px" height="416.6px" /> :
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
        </div >
    );
};

