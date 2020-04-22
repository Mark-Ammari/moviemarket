import React from 'react';
import classes from './FilmSection.module.css';
import InfoBox from '../InfoBox/InfoBox';

export default function FilmSection(props) {
    return (
        <section className={classes.FilmSection}>
            <InfoBox
                heading={props.heading}
                title={props.title}
                subtitle={props.subtitle}
            />
            <div className={classes.FilmSectionChildren}>
                {props.children}
            </div>
        </section>
    );
};