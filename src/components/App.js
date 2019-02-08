import React, { Component } from 'react';
import newsService from '../api/newsapi';
import SearchBar from './SearchBar';
import ArticleList from './ArticleList';
import './App.css';

class App extends Component {
  state = { articles: [] }

  onSearchSubmit = async (queryTerm) => {
    try {
      const searchResponse = await newsService.getEverything(queryTerm);
      this.setState({ articles: searchResponse.data.articles})
      console.log(searchResponse);
    }
    catch {
      console.log('Error accessing API.');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Newsworthy</h1>
        </header>
        <main>
          <SearchBar onSubmit={this.onSearchSubmit} />
          <ArticleList articles={this.state.articles} />
        </main>
        <footer>
          <small>Powered by <a href="https://newsapi.org/">News API</a></small><br />
          <small>By <a href="https://arpitsheth.com">Arpit Sheth</a></small>
        </footer>
      </div>
    );
  }
}

export default App;
