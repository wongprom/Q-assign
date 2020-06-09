import React, { useState } from 'react';
import { Item } from 'semantic-ui-react';

const MenuDetail = ({ category }) => {
  const [categories, setCategories] = useState(category);
  //* need (!) WIP. toggle ONE category
  if (!categories.show) {
    return categories.products.map((product) => {
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
