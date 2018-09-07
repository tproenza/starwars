import React, { Component } from "react";
import Quote from "./Quote";

class CategoryItems extends Component {
  constructor() {
    super();
    this.state = { catItems: {} };
  }

  componentDidMount() {
    const { category } = this.props.match.params;
    fetch(`http://swapi.co/api/${category}`)
      .then(res => res.json())
      .then(catItems => this.setState({ catItems }));
  }

  render() {
    return (
      <div>
        <Quote />
      </div>
    );
  }
}

export default CategoryItems;
