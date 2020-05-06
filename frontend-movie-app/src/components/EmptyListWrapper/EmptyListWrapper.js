import React from 'react';
import { WarningRounded } from '@material-ui/icons';
import classes from './EmptyListWrapper.module.css';

function EmptyListWrapper({ width, height }) {
    return (<div style={{
        width: width,
        height: height
    }} className={classes.EmptyListWrapper}>
        <div className={classes.EmptyListWrapperContainer}>
            <WarningRounded
                fontSize="large"
                style={{
                    color: "#F5C518"
                }}
            />
            <div className={classes.EmptyListWrapperMessage}>
                <p>Cannot Load Information</p>
                <p>List is empty.</p>
            </div>
        </div>
    </div>
    )
};

export default EmptyListWrapper;