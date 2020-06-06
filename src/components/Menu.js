import React, { useContext, useState } from 'react';
import { TestDataContext } from '../contexts/TestDataContext';
import MenuDetail from './MenuDetail';

const Menu = ({ singleMenuData }) => {
  console.log('FROM MENU.JS', singleMenuData);
  const { categories } = singleMenuData;
  console.log('categories', categories);
  // const [menusData] = useContext(TestDataContext);
  //Här ska vi Out putta Kategorier

  return null;
};

export default Menu;
