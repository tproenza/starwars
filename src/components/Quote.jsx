import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class Quote extends Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12} style={styles.quoteItem}>
          <Typography variant="caption" style={styles.quote}>
            {`"I've altered the deal - Pray I don't alter it any further"`}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  quoteItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  quote: {
    fontStyle: "italic",
    letterSpacing: 0.5,
    padding: 15
  }
};

export default Quote;
