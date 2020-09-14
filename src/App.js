import React, { Component, Fragment } from "react";
import Book from "./components/Book";
import Form from "./components/Form";

export class App extends Component {
  state = {
    book: [],
    name: null,
  };

  getBook = async (e) => {
    e.preventDefault();
    var b_name = e.target.elements.name_book.value;
    const response = await fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=fVIsBGGuPGFTzZ4FqIWLZYtHCGqGnYU3`
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      book: data.results.books,
      name: b_name,
    });
  };

  render() {
    return (
      <div>
        <header className="Appheader">
          <h1 className="App-title">Book Search</h1>
          <h1>{this.name}</h1>
        </header>
        <Form getGroup={this.getBook} />
        <Book getBook={this.getBook} />
        <Novel book={this.state.book} Name={this.state.name} />
      </div>
    );
  }
}

export default App;
