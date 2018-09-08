import React, { Component } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

class CategoryItemAvatar extends Component {
  render() {
    const { avatarUrl } = this.props;
    return (
      <div>
        <Grid container style={styles.container}>
          <Grid item xs={12}>
            <Avatar src={avatarUrl} style={styles.avatar} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: 5
  },
  avatar: {
    margin: "auto"
  }
};

export default CategoryItemAvatar;
