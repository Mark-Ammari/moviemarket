import React from 'react';
import { WarningRounded } from '@material-ui/icons';
import classes from './ErrorWrapper.module.css';

function ErrorWrapper({ width, height }) {
    return (<div style={{
        width: width,
        height: height
    }} className={classes.ErrorWrapper}>
        <div className={classes.ErrorWrapperContainer}>
            <WarningRounded
                fontSize="large"
                style={{
                    color: "#F5C518"
                }}
            />
            <div className={classes.ErrorWrapperMessage}>
                <p>Sorry, something went wrong.</p>
                <p>Please refresh the page or contact technical support.</p>
            </div>
        </div>
    </div>
    )
};

export default ErrorWrapper;