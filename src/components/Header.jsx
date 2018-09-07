import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import spaceImg from "./application_root_header.png";

class Header extends Component {
  render() {
    return (
      <div style={styles.headerContainer}>
        <img src={spaceImg} style={styles.headerBackground} />
        <Typography variant="subheading" style={styles.headerTitle}>
          Explore the Star Wars Universe
        </Typography>
        <Typography variant="body1" align="left" style={styles.headerText}>
          {`Orbiting the plant at maximum velocity. 
        The moon with the Rebel base will be in range in thirty minutes. 
        This will be a day long remembered.`}
        </Typography>
      </div>
    );
  }
}

const styles = {
  headerBackground: {
    height: 200,
    width: "100%"
  },
  headerContainer: {
    position: "relative",
    height: 200
  },
  headerTitle: {
    position: "absolute",
    bottom: 74,
    left: 16,
    color: "#FFFF"
  },
  headerText: {
    position: "absolute",
    bottom: 13,
    left: 16,
    color: "#FFFF",
    lineHeight: "1.3em"
  }
};

export default Header;
