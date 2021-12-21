import React from 'react';
import { Link, makeStyles } from '@material-ui/core';
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const ContactMe = () =>{
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.containerbox}>
                    <Link href='https://github.com/DavidDlp' target="_blank">
                        <FaGithub className={classes.logo}/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/david-dlp' target="_blank">
                        <FaLinkedin className={classes.logo}/>
                    </Link>
                    <Link href='mailto:dlpdavid17@gmail.com' target="_blank">
                        <FaMailBulk className={classes.logo}/>
                    </Link>
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