import React, { Component } from "react";
import List from "./List.js";
import store from "../Store.js";
import { formatRelativeDate } from "../helpers.js";

class HistoryList extends Component {
  constructor() {
    super();
    this.state = { historyList: [] };
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  handleRemove(keyword) {
    store.removeHistory(keyword);
    this.fetch();
  }

  render() {
    return (
      <List
        data={this.state.historyList}
        onClick={this.props.onClick}
        hasDate
        onRemove={(keyword) => this.handleRemove(keyword)}
      />
    );
  }
}

export default HistoryList;
