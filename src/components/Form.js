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

const Form_AH = (props) => (
  <form onSubmit={props.getBook}>
    <Button className="book_button">A-H</Button>
  </form>
);

const Form_IN = (props) => (
  <form onSubmit={props.getBook}>
    <Button className="book_button">I-N</Button>
  </form>
);

const Form_OS = (props) => (
  <form onSubmit={props.getBook}>
    <Button className="book_button">O-S</Button>
  </form>
);

const Form_TZ = (props) => (
  <form onSubmit={props.getBook}>
    <Button className="book_button">T-Z</Button>
  </form>
);

export default Form_AH;
