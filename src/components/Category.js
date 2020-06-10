import React from 'react';

const Category = ({ categorys }) => {
  console.log(categorys);

  return (
    <div>
      <h2>{categorys.name}</h2>
      {categorys.products.map((product) => {
        return (
          <div>
            <p> Rätt: {product.name}</p>
            <p>{product.price} Kr </p>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
