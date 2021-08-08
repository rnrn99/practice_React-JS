import React, { Component } from "react";
import List from "./List.js";
import store from "../Store.js";

class KeywordList extends Component {
  constructor() {
    super();

    this.state = { keywordList: [] };
  }

  componentDidMount() {
    const keywordList = store.getKeywordList();
    this.setState({ keywordList });
  }

  render() {
    return (
      <List
        data={this.state.keywordList}
        onClick={this.props.onClick}
        hasIndex
      />
    );
  }
}

export default KeywordList;
