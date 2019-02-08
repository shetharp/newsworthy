import React, { Component } from 'react';
import newsService from '../api/newsapi';
import './App.css';

class App extends Component {
  testAPI = async () => {
    try {
      const everythingResponse = await newsService.getEverything('climate');
      console.log(everythingResponse);
    }
    catch {
      console.log('API not working.');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Newsworthy</h1>
        </header>
        <main>
          <button onClick={this.testAPI}>Get Top Headlines</button>
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
