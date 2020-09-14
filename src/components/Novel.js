import React from "react";

const Novel = (props) => (
  <div>
    {props.book.map((novel) => {
      if (novel.title === `${props.Name}`) {
        return (
          <div key={novel.title}>
            <h3>Book name: {novel.title}</h3>
            <div>Author: {novel.author}</div>
            <div>Description: {novel.description}</div>
            <img src={novel.book_image} alt={novel.title} />
            <br />
            <a href={novel.amazon_product_url}>Check book at Amazon</a>
          </div>
        );
      }
      return null;
    })}
  </div>
);

export default Novel;
