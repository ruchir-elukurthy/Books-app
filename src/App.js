import React, { Component } from "react";
import Book from "./components/Book";
import Novel from "./components/Novel";

export class App extends Component {
  state = {
    book: [],
  };

  getBook = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=API-KEY`
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      book: data.results.books,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="Appheader">
          <h1 className="App-title">Book Search</h1>
        </header>
        <Book getBook={this.getBook} />
        <Novel book={this.state.book} />
      </div>
    );
  }
}

export default App;
