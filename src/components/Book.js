import React from "react";
import Styled from "styled-components";

const Button = Styled.button`
  display: block;
  height: 30px;
  width: 100px;
  background-color: blue;
  border: 1px solid black;
  padding: 1px;
  text-align: centre;
  color: #eeeeee;
  cursor: pointer;
  border-radius: 10px;
`;

const Book = (props) => (
  <form onSubmit={props.getBook}>
    <input
      className="book_input"
      type="text"
      name="name_book"
      placeholder="Book name"
    />
    <br /> <br />
    <Button className="book_button">Search</Button>
  </form>
);

export default Book;
