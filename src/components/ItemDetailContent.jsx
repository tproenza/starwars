import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { pretty } from "../utils/ItemUtil";

class ItemDetailContent extends Component {
  render() {
    const { detail, category, field } = this.props;
    return (
      <Grid container style={styles.idcContainer}>
        <Grid item xs={12}>
          <Paper style={styles.paper}>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant={"caption"} style={styles.idcText}>
                  {pretty(field)}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"body2"} style={styles.idcText}>
                  {detail[field]}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  paper: {
    padding: 10,
    borderRadius: 0,
    marginBottom: 25
  },
  idcContainer: {
    backgroundColor: "black"
  },
  idcText: {
    paddingLeft: 5
  }
};

export default ItemDetailContent;
