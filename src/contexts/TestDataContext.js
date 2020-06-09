import React, { createContext, useState } from 'react';
import { data } from '../data/testdata';

export const TestDataContext = createContext();

const TestDataContextProvider = (props) => {
  const [menusData, setTestData] = useState(data);

  //* the goal is to have the  "filter menu by akvivedays" function here
  // const todaysMenu = menusData.map((meny, e ) => {
  //   if (meny.activeDays.includes(buttonValue)) {
  //     return meny;
  //   } else {
  //     return;
  //   }
  // });
  // console.log(todaysMenu);

  return (
    <TestDataContext.Provider value={[menusData]}>
      {props.children}
    </TestDataContext.Provider>
  );
};

export default TestDataContextProvider;
