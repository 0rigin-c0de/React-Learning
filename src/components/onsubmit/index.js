import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
    this.handleChangeQuery = this.handleChangeQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="SearchForm" onSubmit={this.handleSubmit}>
        <input
          placeholder="Search Raw React"
          value={this.state.query}
          onChange={this.handleChangeQuery}
        />
        <button type="submit">▶︎</button>
      </form>
    );
  }

  handleChangeQuery(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleSubmit(event) {
    // Prevent the browser from reloading the page on form submission
    event.preventDefault();

    if (this.props.onSearch) {
      this.props.onSearch(this.state.query);
    }
  }
}

ReactDOM.render(
  <SearchForm onSearch={(query) => alert(`Searching for "${query}".`)} />,
  document.getElementById("root")
);
