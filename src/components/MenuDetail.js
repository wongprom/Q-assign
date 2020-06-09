import React, { useState } from 'react';
import { Item } from 'semantic-ui-react';

const MenuDetail = ({ category }) => {
  console.log('category', category);
  console.log('category.products', category.products);
  const [categories, setCategories] = useState(category);
  //* (!)categories.show needed to tiggle menu as is, 2 at the time
  if (!categories.show) {
    return categories.products.map((product) => {
      console.log('från map', product);
      return (
        <Item style={{ color: 'red', border: '1px solid red' }}>
          <Item.Image
            size="tiny"
            src="https://images.unsplash.com/photo-1537081956137-3931105e2d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          />
          <Item.Content verticalAlign="middle">{product.name}</Item.Content>
          <Item.Content verticalAlign="middle">{product.price}</Item.Content>
        </Item>
      );
    });
  } else {
    return null;
  }
};

export default MenuDetail;
