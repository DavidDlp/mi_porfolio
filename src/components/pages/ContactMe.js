import React from 'react';
import { makeStyles } from '@material-ui/core';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const ContactMe = () =>{
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.containerbox}>
                    <FaGithub className={classes.logo}/>
                    <FaLinkedin className={classes.logo}/>
                    <FaMailBulk className={classes.logo}/>
                </div>
            </div>
            
        </>
    )

};

const useStyles = makeStyles((theme) => ({
    container: {
        // border: '1px solid grey',
        // borderRadius: 16,
        display:"flex",
        justifyContent: "center",
        textAlign: "center",
        // margin: theme.spacing(3),
    },
    containerbox:{
        // border: '1px solid grey',
        // borderRadius: 16,
        width: "90%",
        margin: "0 auto",
    },
    logo:{
        fontSize: "1.5rem",
        margin: theme.spacing(2),
    },
}))

export default ContactMe