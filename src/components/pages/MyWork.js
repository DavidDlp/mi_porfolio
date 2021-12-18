import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { FcHome } from 'react-icons/fc';

const MyWork = ({title, dark, id}) =>{
    const classes = useStyles();

    return (
        <Box className={`${classes.section} ${dark && classes.sectiondark}`}>
            <FcHome className={classes.logo}/>
            <div>
                <h1>Esto Es el My Work</h1>
            </div>
        </Box>
    )

};

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "100vh",
    },
    sectiondark:{
        background: "#333",
        color: "#fff",
    },
    logo:{
        fontSize: "2.5rem"
    },
  }))

export default MyWork