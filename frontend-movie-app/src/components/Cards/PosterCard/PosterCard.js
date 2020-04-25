import React from 'react';
import classes from './PosterCard.module.css';
import { NavLink } from 'react-router-dom';
import { WarningRounded } from '@material-ui/icons';

export default function PosterCard(props) {
    return (
        <NavLink className={classes.PosterCardNavLink}  to={`/${props.type}/${props.title.split(" ").join("-").toLowerCase()}/${props.id}`}>
            <div style={{ margin: props.margin || '10px' }} className={classes.PosterCard}>
                {props.isSrc ?
                    <img
                        src={props.src}
                        alt="poster-Card"
                    />
                    :
                    <div className={classes.PosterCardIsSrc}>
                        <WarningRounded />
                        <p>Cannot load image</p>
                    </div>
                }
                <div className={classes.Filter}></div>
                {/* <h4>{props.title}</h4> */}
            </div>
        </NavLink>
    );
};