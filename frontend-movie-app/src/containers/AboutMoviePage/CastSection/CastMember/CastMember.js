import React from 'react';
import classes from './CastMember.module.css';
import emptyProfile from '../../../../assets/emptyprofile.webp'
export default function CastMember({ src, name, character, isSrc }) {
    return (
        <div className={classes.CastMember}>
            {isSrc ? <img src={src} alt="profile" />
                :
                <img src={emptyProfile} alt="empty profile" />
            }
            <div>
                <p>{name}</p>
                <p>{character}</p>
            </div>
        </div>
    );
};

