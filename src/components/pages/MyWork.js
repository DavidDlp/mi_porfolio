import React from 'react';
import { Link } from "react-router-dom";
import workData from '../../workData';
import { Card, CardContent, CardMedia, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import { FcHome } from 'react-icons/fc';

const MyWork = ({title, dark}) =>{
    const classes = useStyles();

    return (
        <Container className={`${classes.section} ${dark && classes.sectiondark}`}>
            <div>
            <Link to="/"><FcHome className={classes.logo}/></Link>
            </div>
            <div className={classes.sectioncontent}>
                <Typography variant="h2" color="textPrimary">
                    {title}
                </Typography>
                <Grid container className={classes.containercards}>
                    {
                        workData.map(({title, image, description, link}, index) =>(
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.picture} image={image} titulo="picture"/>
                                    <CardContent>
                                        <Link to={link} color="primary" target="_blank" rel="noopener noreferrer">
                                            {title}
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
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
    logo:{
        fontSize: "2.5rem",
        textAlign: "start",
    },
    sectioncontent:{
        maxWidth: "90vw",
        margin: "0 auto",
        textAlign: "center",
    },
    containercards:{
        marginTop: theme.spacing(4),
        
    },
    card:{
        maxWidth: 345,
        minHeight:275,
        margin: theme.spacing(3),
    },
    picture:{
        // height: 0,
        // paddingTop: "56.25%",  //16:9
    },
    
}))

export default MyWork