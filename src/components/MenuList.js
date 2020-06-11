import React, { useState, useEffect } from 'react';
import { data } from '../data/testdata';
import Menu from '../components/Menu';
import Category from '../components/Category';

const MenuList = () => {
  const [menusData, setMenusData] = useState([]);

  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState([]);
  const [shopIds, setShopids] = useState([]);
  useEffect(() => {
    setMenusData(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }, []);

  const filterMenuHandler = (event) => {
    let text = event.target.value;
    setInputValue(text);
  };
  // console.log(menusData);

  const displayActivDayHandler = () => {
    const daysOfTheWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    let now = new Date();
    const currentDay = daysOfTheWeek[now.getDay()].toUpperCase();

    setMenusData(
      menusData.filter((menu) => {
        return menu.activeDays.includes(currentDay);
      })
    );
    console.log('currentDay: ', currentDay);
    console.groupEnd();
  };

  const filterMenus = menusData.filter((menu) => {
    return menu.name
      .toLowerCase()
      .trim()
      .includes(inputValue.toLowerCase().trim());
  });

  let menus = filterMenus.map((menu) => {
    // console.log(menu);
    return (
      <div key={menu.name}>
        <h1>{menu.name}</h1>
        <h2>
          {menu.categories.map((category) => (
            <Category key={category.name} categorys={category} />
          ))}
        </h2>
      </div>
    );
  });

  const filterShopIdsHandler = (event) => {
    const target = event.target;
    let value = target.value;
    if (target.checked) {
      setShopids([...shopIds, value]);
    } else {
      setShopids([...shopIds.filter((item) => item !== value)]);
    }
  };
  return (
    <div>
      <form>
        <fieldset>
          <div>
            <label htmlFor="ett">Restaurang 1</label>
            <input
              type="checkbox"
              name="ett"
              id="ett"
              value="ett"
              onChange={(event) => filterShopIdsHandler(event)}
            />
          </div>
          <div>
            <label htmlFor="tva">Restaurang 2</label>
            <input
              type="checkbox"
              name="tva"
              id="tva"
              value="tva"
              onChange={(event) => filterShopIdsHandler(event)}
            />
          </div>
          <div>
            <label htmlFor="tre">Restaurang 3</label>
            <input
              type="checkbox"
              name="tre"
              id="tre"
              value="tre"
              onChange={(event) => filterShopIdsHandler(event)}
            />
          </div>
        </fieldset>
      </form>
      {shopIds}
      <div>
        <label>Filter Menus</label>
        <input
          type="text"
          onChange={(e) => filterMenuHandler(e)}
          value={inputValue}
          placeholder="Filter Menus"
        />
        <button onClick={() => displayActivDayHandler()}>
          Dagens aktiva Meny
        </button>
        <button onClick={() => setMenusData(data)}>Alla våra menyer</button>
      </div>
      {menus}
    </div>
  );
};
export default MenuList;
