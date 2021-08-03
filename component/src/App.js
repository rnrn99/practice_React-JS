import React from "react";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
    };
  }

  search(keyword) {
    console.log(keyword);
  }

  handleSearchKeyword(searchKeyword) {
    if (searchKeyword.length <= 0) {
      this.handleReset();
    }
    this.setState({ searchKeyword });
  }

  handleReset() {
    console.log("reset");
  }

  render() {
    return (
      <>
        <Header title="검색" />

        <div className="container">
          <SearchForm
            value={this.state.searchKeyword}
            onChange={(value) => this.handleSearchKeyword(value)}
            onSubmit={(searchKeyword) => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
        </div>
      </>
    );
  }
}
