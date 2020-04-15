import React from 'react';
import classes from './FilmSection.module.css';
import InfoBox from '../../../../components/InfoBox/InfoBox';

export default function FilmSection(props) {
    return (
        <section className={classes.FeaturedSection}>
            <InfoBox
                heading={props.heading}
                title={props.title}
                subtitle={props.subtitle}
            />
            <div>
                {props.children}
            </div>
        </section>
    );
};