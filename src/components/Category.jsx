import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

class Category extends Component {
  render() {
    const { category, categoryUrl } = this.props;
    const categoryIcon = require("../images/" + category + ".png");
    return (
      <Grid item xs={12} style={styles.category}>
        <Link to={`/category/${category}`} style={styles.link}>
          <Paper style={styles.paper}>
            <Grid container>
              <Grid item xs={2} style={styles.categoryIcon}>
                <img src={categoryIcon} />
              </Grid>
              <Grid item xs={3} style={styles.categoryName}>
                <Typography>
                  {category[0].toUpperCase() + category.slice(1)}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Link>
      </Grid>
    );
  }
}

const styles = {
  paper: {
    padding: 5
  },
  category: {
    padding: 3
  },
  categoryIcon: {
    textAlign: "center"
  },
  categoryName: {
    display: "flex",
    alignItems: "center"
  },
  link: {
    textDecoration: "none"
  }
};
export default Category;
