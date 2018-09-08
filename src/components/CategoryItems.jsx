import React, { Component } from "react";
import Quote from "./Quote";
import CategoryItem from "./CategoryItem";
import { Link } from "react-router-dom";

class CategoryItems extends Component {
  constructor() {
    super();
    this.state = { catItems: [], category: "" };
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    fetch(`http://swapi.co/api/${category}`)
      .then(res => res.json())
      .then(items =>
        this.setState({ catItems: items.results, category: category })
      );
  }

  render() {
    return (
      <div>
        <Quote />
        {this.state.catItems.map(item => (
          <Link
            key={item.name || item.episode_id}
            to={`/category/${this.state.category}/${
              item.name
                ? item.name.split(" ").join("-")
                : item.title.split(" ").join("-")
            }/${item.url.split("/")[5]}`}
            style={styles.link}
          >
            <CategoryItem item={item} category={this.state.category} />
          </Link>
        ))}
      </div>
    );
  }
}

const styles = {
  link: {
    textDecoration: "none"
  }
};

export default CategoryItems;
