import React from "react";

const Novel = (props) => (
  <div>
    {props.book.map((novel) => {
      if (novel.title === `${props.Name}`) {
        return (
          <div key={novel.title}>
            <div>Props: {props.Name}</div>
            <div>Book name: {novel.title}</div>
            <div>Author: {novel.author}</div>
            <div>Description: {novel.description}</div>
            <img src={novel.book_image} alt={novel.title} />
            <br />
            <a href={novel.amazon_product_url}>Check book at Amazon</a>
            <br /> <br /> <br />
          </div>
        );
      }
    })}
  </div>
);

export default Novel;
