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
                        text= 'Me llamo David del Pozo "Roma"'
                        textStyle={{
                            fontSize: "2rem", 
                            fontWeight: "700px", 
                            textAlign: "center",
                            color: "#246EB9"}}
                        startDelay={100}
                        cursorColor="black"
                        typeSpeed={100}
                        />
                        <TypeWritterEffect 
                        text= 'Soy "Junior" FullStack developer'
                        textStyle={{
                            fontSize: "1.3rem", 
                            fontWeight: "500px",
                            textAlign: "center"}}
                        startDelay={3000}
                        cursorColor="black"
                        typeSpeed={100}
                        />
                        <Typography variant="h6" color="textSecondary">
                            <p><q>"Si puedes diseñar una cosa, 
                            entonces puedes diseñarlo todo; 
                            si lo haces bien, perdurará para siempre".</q></p>
                            <span>Massimo Vignelli</span>
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
        background: theme.palette.background.main,
        color: theme.palette.third.main,
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
        backgroundColor: theme.palette.primary.main,
        marginLeft: theme.spacing(10),
        marginTop: theme.spacing(10),
        padding: theme.spacing(1),
        "&:hover": {
            backgroundColor: theme.palette.third.main,
        },
        "& a": {
            color: theme.palette.third.main,
            textDecoration: "none",
            fontWeight: 900,
        },
        "& a:hover":{
            color: theme.palette.primary.main,
        }, 
        
    },
  }))

export default AboutMe