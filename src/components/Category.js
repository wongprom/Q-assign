import React, { useState } from 'react';
import nudleImg from '../images/nudle-soop.jpg';

const Category = ({ categorys }) => {
  // console.log(categorys);
  let [showCategory, setShowCategory] = useState(false);

  return (
    <div
      className="col text-center pt-5"
      onClick={() => setShowCategory((showCategory = !showCategory))}
    >
      <img src={nudleImg} className="img-thumbnail" />

      <h2>{categorys.name.toUpperCase()}</h2>

      {showCategory &&
        categorys.products.map((product) => {
          return (
            <div key={product.name}>
              <p> Rätt: {product.name}</p>
              <p>{product.price} Kr </p>
            </div>
          );
        })}
    </div>
  );
};

export default Category;
