import React, { Component } from 'react';

class SearchBar extends Component {
  state = { query: '' };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="news-search">News Search</label>
          <input
            type="text"
            name="news-search"
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
