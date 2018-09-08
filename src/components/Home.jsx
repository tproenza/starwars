import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Header from "./Header";
import Category from "./Category";
import Footer from "./Footer";

class Home extends Component {
  constructor() {
    super();
    this.state = { categories: {} };
  }

  componentDidMount() {
    fetch("http://swapi.co/api/")
      .then(res => res.json())
      .then(categories => this.setState({ categories }));
  }
  render() {
    return (
      <div>
        <Header />
        <Grid container style={styles.categoryContainer}>
          {Object.keys(this.state.categories).map(category => (
            <Category
              key={category}
              category={category}
              categoryUrl={this.state.categories[category]}
            />
          ))}
        </Grid>
        <Footer />
      </div>
    );
  }
}

const styles = {
  categoryContainer: {
    padding: 10
  }
};

export default Home;
