import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import caret from "../images/caret.png";
import moment from "moment";

class CategoryItemIndicator extends Component {
  render() {
    const { created } = this.props;
    return (
      <div>
        <Grid container style={styles.container}>
          <Grid item xs={12}>
            <Typography style={styles.name}>
              {moment(created).format("M/DD/YY")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <img src={caret} style={styles.caret} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  container: {
    flexDirection: "column",
    alignItems: "flex-end",
    paddingRight: 5
  },
  name: {
    overfloWrap: "break-word",
    color: "#696969"
  },
  caret: {
    paddingTop: 5
  }
};

export default CategoryItemIndicator;
