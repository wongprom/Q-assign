import React, { useState } from 'react';

const Category = ({ categorys }) => {
  // console.log(categorys);
  let [showCategory, setShowCategory] = useState(false);

  return (
    <div
      className="col text-center"
      onClick={() => setShowCategory((showCategory = !showCategory))}
    >
      <h2>{categorys.name}</h2>

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
