import React from 'react';
import classes from './FilterBar.module.css';
import SelectField from '../SelectField/SelectField';

export default function FilterBar({ value, onChange, includeAdult, includeVideos, onChangeAdult, onChangeVideos }) {
    return (
        <div className={classes.FilterBar}>
            <SelectField
                value={value}
                onChange={onChange}
            />
        </div>
    )
}