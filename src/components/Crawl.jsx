import React, { Component } from "react";
import crawl from "../css/crawl.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { itemDesc } from "../utils/ItemUtil";

class Crawl extends Component {
  render() {
    const { detail, category } = this.props;
    const epMap = {
      1: "I",
      2: "II",
      3: "III",
      4: "IV",
      5: "VI",
      6: "VII"
    };
    return (
      <Grid item style={styles.headerItem}>
        <div className="fade" />
        <div className="crawl">
          <Typography variant={"display1"} style={styles.headerHeadline}>
            {detail.title}
          </Typography>
          <Typography variant={"display1"} style={styles.headerHeadline}>
            {"EPISODE " + epMap[detail.episode_id]}
          </Typography>
          <Typography variant={"title"} style={styles.headerText}>
            {detail[itemDesc[category]]}
          </Typography>
        </div>
      </Grid>
    );
  }
}

const styles = {
  headerItem: {
    position: "relative",
    top: 160,
    transformOrigin: "50% 100%"
  },
  headerText: {
    color: "yellow"
  },
  headerHeadline: {
    color: "yellow",
    paddingBottom: 15
  }
};

export default Crawl;
