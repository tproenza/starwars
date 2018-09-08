import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

class CategoryItemDescription extends Component {
  render() {
    const { name, description } = this.props;
    return (
      <div>
        <Grid container style={styles.container}>
          <Grid item xs={12}>
            <Typography style={styles.title}>{name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography style={styles.description}>{description}</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  container: {
    flexDirection: "column",
    paddingLeft: 5
  },
  title: {
    overfloWrap: "break-word",
    color: "#424242",
    fontSize: "1rem",
    fontWeight: 500,
    letterSpacing: 0.5
  },
  description: {
    color: "#696969",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
};

export default CategoryItemDescription;
