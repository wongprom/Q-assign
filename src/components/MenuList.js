import React, { useState } from 'react';
import { data } from '../data/testdata';
import Menu from '../components/Menu';
import Category from '../components/Category';

const MenuList = () => {
  const [menusData, setMenus] = useState(data);
  menusData.sort((a, b) => (a.name > b.name ? 1 : -1));
  const [inputValue, setInputValue] = useState('');

  const inputHandler = (event) => {
    let text = event.target.value;
    console.log(text);

    setInputValue(text);
  };

  const filterMenus = menusData.filter((menu) => {
    return menu.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  console.log('menus', menusData);
  let menus = filterMenus.map((menu, index) => {
    return (
      <div key={index}>
        <h1>{menu.name}</h1>
        <h2>
          {menu.categories.map((category) => (
            <Category categorys={category} />
          ))}
        </h2>
      </div>
    );
  });

  return (
    <div>
      <div>
        {inputValue}
        <label>Filter Menus</label>

        <input
          type="text"
          onChange={(e) => inputHandler(e)}
          value={inputValue}
          placeholder="Filter Menus"
        />
        {/* <Button></Button> */}
      </div>
      {menus}
    </div>
  );
};
export default MenuList;
