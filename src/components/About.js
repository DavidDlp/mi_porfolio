import { makeStyles } from '@material-ui/core';
import React from 'react';

const About = ({title, dark, id}) =>{
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <h1>Esto Es el About</h1>
        </div>
    )

};

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    }
  }))

export default About