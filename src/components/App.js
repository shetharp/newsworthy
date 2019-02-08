import React, { Component } from 'react';
import newsService from '../api/newsapi';
import SearchBar from './SearchBar';
import ArticleList from './ArticleList';
import './App.css';

class App extends Component {
  state = { query: '', articles: [], page: 0, }

  onSearchSubmit = async (queryTerm, pageNum) => {
    try {
      const searchResponse = await newsService.getEverything(queryTerm, pageNum);
      this.setState({ query: queryTerm, articles: searchResponse.data.articles, page: pageNum })
      console.log(searchResponse);
    }
    catch {
      console.log('Error accessing API.');
    }
  }

  onPageChange = async (isNext) => {
    const pageNum = this.state.page;
    if (isNext) { 
      await this.onSearchSubmit(this.state.query, pageNum + 1);
    }
    if (!isNext && this.state.page > 1) {
      await this.onSearchSubmit(this.state.query, pageNum - 1);
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
          <p>Page: {this.state.page}</p>
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
