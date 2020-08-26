import React, { Component } from "react";
import Book from "./components/Book";

export class App extends Component {
  state = {
    book: [],
  };

  getBook = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=fVIsBGGuPGFTzZ4FqIWLZYtHCGqGnYU3"
    );
    const data = await response.json();
    console.log(data);
    this.setState({
      book: data.results.books,
    });
  };

  render() {
    // if (this.state.loading === true) {
    //   return <div>LOADING...</div>;
    // }
    // if (!this.state.book.length) {
    //   return <div>No book available</div>;
    // }
    return (
      <div className="App">
        <header className="Appheader">
          <h1 className="App-title">Book Search</h1>
        </header>
        <Book getBook={this.getBook} />
        {this.state.book.map((novel) => (
          <div key={novel.title}>
            <div>Book name: {novel.title}</div>
            <div>Author: {novel.author}</div>
            <div>Description: {novel.description}</div>
            <img src={novel.book_image} alt={novel.title} />
            <br />
            <a href={novel.amazon_product_url}>Check book at Amazon</a>
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
