import React, { Component } from "react";

export class Image extends Component {
  render() {
    return this.props.all_book.map((novel) => (
      <div key={novel.title}>
        <p>{novel.title}</p>
        <div>{novel.author}</div>
        <div>{novel.description}</div>
        <div>{novel.book_image}</div>
        <div>{novel.amazon_product_url}</div>
        <Image image={novel.book_image} />
        <br />
        <br />
        <br />
      </div>
    ));
  }
}

export default Image;
