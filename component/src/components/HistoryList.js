import React from "react";
import List from "./List.js";
import store from "../Store.js";
import { formatRelativeDate } from "../helpers.js";

class HistoryList extends List {
  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const data = store.getHistoryList();
    this.setState({ data });
  }

  handleRemove(event, keyword) {
    event.stopPropagation();
    store.removeHistory(keyword);
    this.fetch();
  }

  renderItem(item) {
    return (
      <>
        <span>{item.keyword}</span>
        <span className="date">{formatRelativeDate(item.date)}</span>
        <button
          className="btn-remove"
          onClick={(event) => this.handleRemove(event, item.keyword)}
        ></button>
      </>
    );
  }
}

export default HistoryList;
