import React from 'react';
import classes from './Footer.module.css';
import github from '../../assets/github.svg';
import sourcecode from '../../assets/sourcecode.svg';

export default function Footer() {
    return (
        <footer
            className={classes.Footer}>
            <p>Created by Mark Ammari</p>
            <div>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Mark-Ammari"><img src={github} alt="github" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/Mark-Ammari/moviemarket"><img src={sourcecode} alt="source-code" /></a>
            </div>
        </footer>
    )
}