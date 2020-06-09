import React, { useState, useEffect } from 'react';
import { Item } from 'semantic-ui-react';
import MenuDetail from './MenuDetail';

const Menu = ({ menuDataCategory }) => {
  let [showCategory, setShowCategory] = useState(() => false);
  const [categories, setCategories] = useState(menuDataCategory);

  //!how to add Key/value to nested Arr/Obj...UseReduser???
  useEffect(() => {
    let updatedArray = [...categories].map((obj, index) => {
      obj.id = index;
      obj.show = false;
    });
    setCategories([...categories, updatedArray]);
  }, []);

  const toggleCategoryHandler = (categorie, categoriIndex) => {
    setShowCategory((showCategory = !showCategory));
  };

  return categories.map((categorie, categoriIndex) => {
    if (categorie.length < 3) {
      return;
    }
    return (
      <Item.Group
        onClick={() => toggleCategoryHandler(categorie, categoriIndex)}
        key={categoriIndex}
      >
        <Item style={{ border: '1px solid pink' }}>
          <Item.Content verticalAlign="middle">
            <Item.Header style={{ color: 'green' }}>
              {categorie.name}
            </Item.Header>
          </Item.Content>
          <Item.Image
            size="tiny"
            src="https://images.unsplash.com/photo-1527997921830-de1cf1f9b430?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80"
          />
          {showCategory && (
            <Item.Content>
              <MenuDetail category={categorie} />
            </Item.Content>
          )}
        </Item>
      </Item.Group>
    );
  });
};

export default Menu;
