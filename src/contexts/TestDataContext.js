import React, { createContext, useState } from 'react';
import { data } from '../data/testdata';

export const TestDataContext = createContext();

const TestDataContextProvider = (props) => {
  const [menusData, setTestData] = useState(data);

  return (
    <TestDataContext.Provider value={[menusData]}>
      {props.children}
    </TestDataContext.Provider>
  );
};

export default TestDataContextProvider;
