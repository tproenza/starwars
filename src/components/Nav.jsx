import React, { Component } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router";

class Nav extends Component {
  render() {
    const url = this.props.location.pathname;
    const split = url.split("/");
    let heading;

    if (split.length === 2) {
      heading = "STAR WARS API";
    } else if (split.length === 3) {
      heading = split[2].toUpperCase();
    } else if (split.length === 5) {
      heading = split[3]
        .split("-")
        .join(" ")
        .toUpperCase();
    }
    return (
      <div style={styles.root}>
        <AppBar position="static" style={styles.bar}>
          <Toolbar>
            <IconButton
              style={styles.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              {split.length === 2 ? (
                <MenuIcon />
              ) : (
                <i
                  className="fas fa-chevron-left"
                  onClick={this.props.history.goBack}
                />
              )}
            </IconButton>
            <Typography variant="title" color="inherit" style={styles.flex}>
              {heading}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  bar: {
    backgroundColor: "#424242",
    textAlign: "center"
  },
  menuButton: {
    marginLeft: -12
  },
  link: {
    textDecoration: "none"
  }
};

export default withRouter(Nav);
