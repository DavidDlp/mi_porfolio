import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import TypeWritterEffect from 'react-typewriter-effect';
import Skill from './Skill';
import welcome from "./../assets/images/welcome-on-board.jpeg"
import CV from "./../assets/utils/Curriculum-vitae-developed.pdf"


const About = ({title, dark, id}) =>{
    const classes = useStyles();

    return (
        <div className={`${classes.section} ${dark && classes.sectiondark}`}>
            <Skill title="My Coding" id="Skill" dark={false}/>
            <div className={classes.sectioncontent}>
                <Card className={classes.card}>
                    <CardMedia image={welcome} className={classes.cardmedia} title="picture">
                        <CardContent className={classes.cardcontent}>
                            <TypeWritterEffect 
                            text= 'Hola, soy David Del pozo "Roma"'
                            textStyle={{fontSize: "2rem", fontWeight: "700px", color: '#33FFFF'}}
                            startDelay={100}
                            cursorColor="black"
                            typeSpeed={100}
                            />
                            <TypeWritterEffect 
                            text= 'Bienvenido a mi porfolio"'
                            textStyle={{fontSize: "1.3rem", fontWeight: "500px"}}
                            startDelay={3000}
                            cursorColor="black"
                            typeSpeed={100}
                            />
                            <Typography variant="h6" color="textSecondary">
                                Texto de perfil.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" className={classes.pdfbutton}>
                                <a href={CV} download>Download CV</a>  
                            </Button>
                        </CardActions>
                    </CardMedia>
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
        justifyContent: "center",
        textAlign: "center",   
        position: "relative",
        marginTop: theme.spacing(6), //mobile quitar
    },
    cardmedia:{
        borderRadius: 16,
        width: "95%",
        height: "95%",
        margin: theme.spacing(2)
    },
    cardcontent:{
        "& h6": {
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")]:{
                display: "none",
            },
        },
    },
    pdfbutton:{
        position: "absolute",
        bottom: "2rem",
        right: "4rem",
        // [theme.breakpoints.down("sm")]:{
        //     bottom: 10,
        //     rigth: "0.5rem",
        // },
        backgroundColor: '#33FFFF',
        padding: theme.spacing(2),
        "&:hover": {
            backgroundColor: "#fff"
        },
        "& a": {
            color: "#fff",
            textDecoration: "none",
            fontWeight: 900,
        },
        "& a:hover":{
            color: "#33FFFF"
        }, 
        
    },
  }))

export default About