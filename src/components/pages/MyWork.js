import React from 'react';
import { Link } from "react-router-dom";
import { Box, Card, makeStyles, Typography } from '@material-ui/core';
import { FcHome } from 'react-icons/fc';

const MyWork = ({title, dark}) =>{
    const classes = useStyles();

    return (
        <Box className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectionlogo}>
            <Link to="/"><FcHome className={classes.logo}/></Link>
            </div>
            <div className={classes.sectioncontent}>
                <Typography variant="h2" color="textPrimary">
                    {title}
                </Typography>
                <Card className={classes.card}>

                </Card>
            </div>
        </Box>
    )

};

const useStyles = makeStyles((theme) => ({
    section: {
        minHeight: "90vh",
    },
    sectiondark:{
        background: "#333",
        color: "#fff",
    },
    sectionlogo:{
        marginLeft: "1rem",
    },
    sectioncontent:{
        maxWidth: "90vw",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column" 
    },
    card:{
        width: "100%",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginTop: theme.spacing(5), //mobile quitar
    },
    logo:{
        fontSize: "2.5rem",
        textAlign: "start",
    },
  }))

export default MyWork