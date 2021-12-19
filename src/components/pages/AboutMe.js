import React from 'react';
import { Link } from "react-router-dom";
import { Button, Card, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';
import TypeWritterEffect from 'react-typewriter-effect';
import Tecnologies from './Tecnologies';
import welcome from "./../../assets/images/sea-bridge.webp"
import CV from "./../../assets/utils/Curriculum-vitae-developed.pdf"


const AboutMe = ({dark}) =>{
    const classes = useStyles();

    return (
        <Container className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div className={classes.sectioncontent}>
                <Card className={classes.card}>
                    <CardMedia image={welcome} className={classes.cardmedia} title="picture"/>
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
                        <Button variant="contained" className={classes.pdfbutton}>
                            <Link to="/mywork">My Work</Link> 
                        </Button>
                    </CardActions>  
                </Card>
            </div>
            <Tecnologies/>
        </Container>
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
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginTop: theme.spacing(5), //mobile quitar
    },
    cardmedia:{
        borderRadius: 16,
        width: "90%",
        height: 300,
        margin: "0 auto",
    },
    cardcontent:{
        margin: "0 auto",
        "& h6": {
            marginTop: theme.spacing(6),
            [theme.breakpoints.down("sm")]:{
                display: "none",
            },
        },
    },
    pdfbutton:{
        [theme.breakpoints.down("xs")]:{
            margin: "0 auto",
        },
        backgroundColor: '#33FFFF',
        marginLeft: theme.spacing(10),
        marginTop: theme.spacing(10),
        padding: theme.spacing(1),
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

export default AboutMe