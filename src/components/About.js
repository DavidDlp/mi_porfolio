import React from 'react';
import { Card, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import TypeWritterEffect from 'react-typewriter-effect';
import Skill from './Skill';
import welcome from "./../assets/images/welcome-on-board.jpeg"


const About = ({title, dark, id}) =>{
    const classes = useStyles();

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <Skill title="My Coding" id="Skill" dark={false}/>
            <Typography variant="h3">{title}</Typography>
            <div className={classes.sectioncontent}>
                <Card className={classes.card}>
                    <CardMedia image={welcome} className={classes.cardmedia} title="picture"/>
                    <CardContent className={classes.cardcontent}>
                        <TypeWritterEffect 
                            text= 'Hola, soy David Del pozo "Roma"'
                            textStyle={{fontSize: "2rem", fontWeight: "700px", color: '#ff8a80'}}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
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
    sectioncontent:{
        maxWidth: "90vw",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",   
    },
    card:{
        width: "100%",
        height: "70vh",
        display: "flex",
        position: "relative",
        marginTop: theme.spacing(6), //mobile quitar
    },
    cardmedia:{
        width: "250px",
        height: "250px",
        borderRadius: "10px",
        margin: theme.spacing(3)
    },
    cardcontent:{

    }
  }))

export default About