import React from "react";
const Book = (props) => (
  <form onSubmit={props.getBook}>
    <input className="book_input" type="text" name="name_book" />
    <button className="book_button">Search</button>
  </form>
);

export default Book;
