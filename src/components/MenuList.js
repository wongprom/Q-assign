import React, { useState, useEffect } from 'react';
import { data } from '../data/testdata';
import Menu from '../components/Menu';
import Category from '../components/Category';
import heroImg from '../images/hero-img-bowl-meat.jpg';
import menuImg from '../images/main-background.jpg';

const MenuList = () => {
  const [menusData, setMenusData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [active, setActive] = useState([]);
  const [chosenShopIds, setChosenShopIds] = useState([]);

  useEffect(() => {
    console.groupCollapsed('useEffect shopIds');

    // menusData.filter((menu) => {
    //   return menu.activeDays.includes(currentDay);
    // })
    console.log('Menyer att filtrera  ifrån', menusData);

    let test = menusData.map((menuData) => {
      return menuData.shopIds.filter((shopId) => {
        return (
          chosenShopIds.map((chosenShopId) => chosenShopId === shopId) &&
          menuData
        );
      });
    });
    console.log('hämta menyer med dessa id ', chosenShopIds);
    console.log('test', test);
    console.groupEnd();
    // setMenusData([...menusData, test]);
  }, [chosenShopIds]);

  useEffect(() => {
    setMenusData(data.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }, []);
  const filterMenuHandler = (event) => {
    let text = event.target.value;
    setInputValue(text);
  };

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
    if (menu.name === undefined) {
      return;
    }
    return menu.name
      .toLowerCase()
      .trim()
      .includes(inputValue.toLowerCase().trim());
  });

  let menus = filterMenus.map((menu, index) => {
    return (
      <div
        style={{ backgroundImage: `url(${menuImg})`, minHeight: '200px' }}
        className="flex-column m-5 minh-100"
        key={menu.name}
      >
        {/* <img src={menuImg} width="100%" height="100%" alt="paper" 
        
        /> */}
        <h1 className="text-center">{menu.name}</h1>
        <div className="d-flex">
          {menu.categories.map((category) => (
            <Category key={category.name} categorys={category} />
          ))}
        </div>
      </div>
    );
  });

  const filterShopIdsHandler = (event) => {
    const target = event.target;
    let value = target.value;
    if (target.checked) {
      setChosenShopIds([...chosenShopIds, value]);
    } else {
      setChosenShopIds([...chosenShopIds.filter((item) => item !== value)]);
    }
  };
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <img src={heroImg} className="img-fluid" alt="Responsive image" />
          <h1 className="display-4">Be smart, eat smart.</h1>
          <p className="lead">
            Join our <span className="font-weight-bold">Green&Heal</span> family
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <form className="text-center">
          <h2>Sort our Menus by restaurants </h2>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              value="ett"
              name="ett"
              id="ett"
              onChange={(event) => filterShopIdsHandler(event)}
            />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Shop ID 1
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              value="tva"
              name="tva"
              id="tva"
              onChange={(event) => filterShopIdsHandler(event)}
            />
            <label className="form-check-label" for="defaultCheck1">
              Shop ID 2
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="checkbox"
              value="tre"
              name="tre"
              id="tre"
              onChange={(event) => filterShopIdsHandler(event)}
            />
            <label className="form-check-label" for="defaultCheck1">
              Shop ID 3
            </label>
          </div>
        </form>
      </div>

      <h2>{chosenShopIds}</h2>
      <div>
        <div className="container">
          <div className="input-group mb-5">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Search Menu
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              value={inputValue}
              onChange={(e) => filterMenuHandler(e)}
            />
            <button
              onClick={() => displayActivDayHandler()}
              type="button"
              className="btn btn-info ml-3"
            >
              Dagens aktiva Meny
            </button>

            <button
              onClick={() => setMenusData(data)}
              type="button"
              className="btn btn-info ml-2"
            >
              Alla våra menyer
            </button>
          </div>
        </div>
      </div>
      <div className="container fluid mb-5">{menus}</div>
    </div>
  );
};
export default MenuList;
