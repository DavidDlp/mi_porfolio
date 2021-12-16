import React from 'react';
import { makeStyles } from '@material-ui/core';

const Skill = ({title, dark, id}) =>{
    const classes = useStyles();

    return (

        <div className={`${classes.section} ${dark && classes.sectiondark}`}>

            <h1>Esto Es el Skill</h1>
        </div>
    )

};

const useStyles = makeStyles((theme) => ({
    section: {
        
        background: "#c8e6c9",
        border: 1,
        borderColor: 'primary.main',
        borderRadius: 16,

    },
    sectiondark:{
        background: "#333",
        color: "#fff",
    },
  }))

export default Skill