import React, { Component } from "react";

class List extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  renderItem(item, index) {
    throw "renderItem";
  }

  render() {
    return (
      <ul className="list">
        {this.state.data.map((item, index) => {
          return (
            <li key={item.id} onClick={() => this.props.onClick(item.keyword)}>
              {this.renderItem(item, index)}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default List;
