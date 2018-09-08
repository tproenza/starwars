import React, { Component } from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CategoryItemAvatar from "./CategoryItemAvatar";
import CategoryItemDescription from "./CategoryItemDescription";
import CategoryItemIndicator from "./CategoryItemIndicator";
import { itemDesc } from "../utils/ItemUtil";

class CategoryItem extends Component {
  render() {
    const { item, category } = this.props;
    const placeholder = `https://placeholdit.imgix.net/~text?txtsize=34&txt=${
      item.name ? item.name[0] : item.title[0]
    }&w=60&h=60`;
    const name = item.name || item.title;

    return (
      <Grid container>
        <Grid item xs={12} style={styles.itemContainer}>
          <Paper style={styles.Paper}>
            <Grid container>
              <Grid item xs={2}>
                <CategoryItemAvatar avatarUrl={placeholder} />
              </Grid>
              <Grid item xs={7}>
                <CategoryItemDescription
                  name={name}
                  description={item[itemDesc[category]]}
                />
              </Grid>
              <Grid item xs={3}>
                <CategoryItemIndicator created={item.created} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

const styles = {
  itemContainer: {
    paddingTop: 1,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0
  },
  Paper: {
    padding: 10,
    borderRadius: 0
  }
};

export default CategoryItem;
