import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import {
  IoLogoAngular,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io";
import { FaJava, FaNode, FaReact } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const Tecnologies = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <div className={classes.containerlogo}>
        <IoLogoHtml5 className={classes.logo} />
      </div>
      <div className={classes.containerlogo}>
        <IoLogoCss3 className={classes.logo} />
      </div>
      <div className={classes.containerlogo}>
        <IoLogoJavascript className={classes.logo} />
      </div>
      <div className={classes.containerlogo}>
        <IoLogoAngular className={classes.logo} />
      </div>
      <div className={classes.containerlogo}>
        <FaReact className={classes.logo} />
      </div>
      <div className={classes.containerlogo}>
        <FaNode className={classes.logo} />
      </div>
      <div className={classes.containerlogo}>
        <FaJava className={classes.logo} />
      </div>
      <div className={classes.containerlogo}>
        <SiMysql className={classes.logo} />
      </div>
      <div className={classes.containerlogo}>
        <SiMongodb className={classes.logo} />
      </div>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    // border: '1px solid grey',
    // borderRadius: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    flexWrap: "wrap",
    margin: theme.spacing(3),
  },
  containerlogo: {
    margin: "0 auto",
  },
  logo: {
    fontSize: "3rem",
  },
}));

export default Tecnologies;
