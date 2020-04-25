import React from 'react';
import classes from './BackdropCard.module.css';
import { NavLink } from 'react-router-dom';
import { WarningRounded } from '@material-ui/icons';

export default function BackdropCard(props) {
    return (
        <NavLink className={classes.BackdropCardNavLink} to={`/${props.type}/${props.title.split(" ").join("-").toLowerCase()}/${props.id}`}>
            <div style={{ margin: props.margin || '10px' }} className={classes.BackdropCard}>
                {props.isSrc ?
                    <img
                        src={props.src}
                        alt="Backdrop-Card"
                    />
                    :
                    <div className={classes.BackdropCardIsSrc}>
                        <WarningRounded />
                        <p>Cannot load image</p>
                    </div>
                }
                <div className={classes.Filter}></div>
                <h4>{props.title}</h4>
            </div>
        </NavLink>
    );
};