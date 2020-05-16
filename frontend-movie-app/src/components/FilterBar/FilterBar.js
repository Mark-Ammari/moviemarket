import React from 'react';
import classes from './FilterBar.module.css';
import SelectField from '../SelectField/SelectField';
import CheckboxField from '../CheckboxField/CheckboxField'
import { useHistory } from 'react-router-dom';
export default function FilterBar({ value, onChange, includeAdult, includeVideos, onChangeAdult, onChangeVideos }) {
    const history = useHistory()
    return (
        <div className={classes.FilterBar}>
            <SelectField
                value={value}
                onChange={onChange}
            />
        </div>
    )
}