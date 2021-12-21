import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import ContactMe from '../pages/ContactMe';


const Footer = (dark) =>{
    const classes = useStyles();

    return (
        <div className={`${classes.section} ${!dark && classes.sectiondark}`}>
            <ContactMe/>
            <Typography variant="h6" color="textSecondary">
                &copy; DavidDlp "Roma"
            </Typography>
        </div>
    )
};

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "10vh",
        textAlign: "center"
    },
    sectiondark:{
        background: theme.palette.background.main,
        color: theme.palette.third.main,
    },
}))

export default Footer