import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const ContactMe = () =>{
    const classes = useStyles();

    return (
        <Box >
            <div className={classes.container}>
                <h1>Contact me</h1>
            </div>
            
        </Box>
    )

};

const useStyles = makeStyles((theme) => ({
    container: {
        border: '1px solid grey',
        borderRadius: 16,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        margin: theme.spacing(6),
    },
}))

export default ContactMe