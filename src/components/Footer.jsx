import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ensigns from "../images/ensigns.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Grid container style={styles.ensignsContainer}>
        <Grid item xs={12} style={styles.ensignsItem}>
          <img src={ensigns} style={styles.ensigns} />
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  ensignsItem: {
    display: "flex",
    justifyContent: "center"
  },
  ensignsContainer: {
    paddingTop: 11,
    paddingBottom: 20
  },
  ensigns: {
    maxWidth: "40%",
    height: "80%"
  }
};

export default Footer;
