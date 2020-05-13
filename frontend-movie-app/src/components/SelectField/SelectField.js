import React from 'react';
import classes from './SelectField.module.css';

export default function SelectField({ value, onChange }) {
    return (
        <form className={classes.SelectFieldForm}>
            <select
                className={classes.SelectField}
                value={value}
                onChange={onChange}
            >
                <option disabled value="">Sort By</option>
                <option value="popularity.desc">Popularity Descending</option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="release_date.desc">Release Date Descending</option>
                <option value="release_date.asc">Release Date Ascending</option>
                <option value="revenue.desc">Revenue Descending</option>
                <option value="revenue.asc">Revenue Ascending</option>
                <option value="primary_release_date.desc">Primary Release Descending</option>
                <option value="primary_release_date.asc">Primary Release Ascending</option>
                <option value="original_title.desc">Original Title Descending</option>
                <option value="original_title.asc">Original Title Ascending</option>
                <option value="vote_average.desc">Voting Average Descending</option>
                <option value="vote_average.asc">Voting Average Ascending</option>
                <option value="vote_count.desc">Voting Count Descending</option>
                <option value="vote_count.asc">Voting Count Ascending</option>
            </select>
        </form >
    )
}