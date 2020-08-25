import React, { Component } from "react";

export class App extends Component {
  state = {
    book: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=fVIsBGGuPGFTzZ4FqIWLZYtHCGqGnYU3"
    );
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
      <div>
        {this.state.book.map((novel) => (
          <div key={novel.title}>
            <div>{novel.title}</div>
            <div>{novel.author}</div>
            <div>{novel.description}</div>
            <div>{novel.book_image}</div>
            <div>{novel.amazon_product_url}</div>
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
