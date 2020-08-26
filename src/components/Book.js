import React from "react";

const Book = (props) => (
  <form onSubmit={props.getBook}>
    <input type="text" />
    <button>Search</button>
  </form>
);

export default Book;
