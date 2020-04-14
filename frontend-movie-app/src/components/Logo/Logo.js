import React from 'react';
import classes from './Logo.module.css';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
    return (
        <NavLink to="/">
            <img
                style={{
                    width: props.width || "65px",
                    height: "auto",
                    margin: props.margin || '0 0 0 10px'
                }}
                className={classes.Logo}
                src={logo}
                alt="movie-logo" />
        </NavLink>
    );
};
