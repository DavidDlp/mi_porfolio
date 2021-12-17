import React from 'react';
import { makeStyles } from '@material-ui/core';
import ContactMe from './ContactMe';

const Footer = () =>{
    const classes = useStyles();

    return (
        <div className={classes.section}>
           <ContactMe/>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    section: {
        Height: "10vh",
    },
}))

export default Footer