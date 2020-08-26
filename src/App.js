import React, { Component } from "react";
import Image from "./Image";

export class App extends Component {
  state = {
    book: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=fVIsBGGuPGFTzZ4FqIWLZYtHCGqGnYU3"
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    this.setState({
      book: data.results.books,
      loading: false,
    });
  }

  render() {
    if (this.state.loading) {
      return <div>LOADING...</div>;
    }
    if (!this.state.book.length) {
      return <div>No book available</div>;
    }
    return (
      <div className="App">
        <Image all_book={this.state.book} />
      </div>
    );
  }
}

export default App;
