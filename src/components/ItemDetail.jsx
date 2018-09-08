import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { itemDesc, itemDetail } from "../utils/ItemUtil";
import Crawl from "./Crawl";
import ItemDetailContent from "./ItemDetailContent";

class ItemDetail extends Component {
  constructor() {
    super();
    this.state = { detail: {}, category: "" };
  }

  componentDidMount() {
    const { category, id } = this.props.match.params;
    fetch(`http://swapi.co/api/${category}/${id}`)
      .then(res => res.json())
      .then(detail =>
        this.setState({
          detail: detail,
          category: this.props.match.params.category
        })
      );
  }
  render() {
    const avatarUrl =
      "https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=100&h=100";
    const { detail, category } = this.state;
    return (
      <div>
        <Grid container style={styles.detailHeader}>
          {detail.title ? (
            <Crawl detail={detail} category={category} />
          ) : (
            <div>
              <Grid item style={styles.headerItem}>
                <Avatar src={avatarUrl} style={styles.avatar} />
              </Grid>
              <Grid item>
                <Typography variant={"title"} style={styles.headerText}>
                  {detail[itemDesc[category]]}
                </Typography>
              </Grid>
            </div>
          )}
        </Grid>
        {itemDetail[this.props.match.params.category].map(field => (
          <ItemDetailContent
            key={
              detail.name
                ? detail.name + Math.random().toString()
                : detail.title + Math.random().toString()
            }
            detail={detail}
            field={field}
            category={category}
          />
        ))}
      </div>
    );
  }
}

const styles = {
  detailHeader: {
    width: "100%",
    backgroundColor: "black",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    height: 200,
    perspective: 400,
    overflow: "hidden"
  },
  avatar: {
    width: 110,
    height: 110
  },
  headerText: {
    color: "yellow",
    textAlign: "center"
  },
  headerItem: {
    margin: 8
  }
};

export default ItemDetail;
