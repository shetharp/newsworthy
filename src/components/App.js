import React, { Component } from 'react';
import newsService from '../api/newsapi';
import SearchBar from './SearchBar';
import ArticleList from './ArticleList';
import './App.css';

class App extends Component {
  state = { query: '', articles: [], page: 1, }

  onSearchSubmit = async (queryTerm, pageNum) => {
    try {
      const searchResponse = await newsService.getEverything(queryTerm, pageNum);
      this.setState({ query: queryTerm, articles: searchResponse.data.articles })
      console.log(searchResponse);
    }
    catch {
      console.log('Error accessing API.');
    }
  }

  onPageChange = async (isNext) => {
    if (isNext) { 
      this.setState({ page: this.state.page+1 })
    }
    else if (this.state.page > 0) {
      this.setState({ page: this.state.page-1 })
    }
    await this.onSearchSubmit(this.state.query, this.state.page);
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
          <button disabled={this.state.query === '' ? true : false} onClick={e => this.onPageChange(false)}>Previous Page</button>
          <button disabled={this.state.query === '' ? true : false} onClick={e => this.onPageChange(true)}>Next Page</button>
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
