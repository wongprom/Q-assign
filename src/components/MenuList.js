import React, { useContext } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Menu from '../components/Menu';
import { TestDataContext } from '../contexts/TestDataContext';
const MenuList = (props) => {
  const [menusData] = useContext(TestDataContext);

  //* sorting menus alphabetically
  menusData.sort((a, b) => (a.name > b.name ? 1 : -1));
  return menusData ? (
    menusData.map((menuData, index) => {
      return (
        <Grid.Column key={index} width={8}>
          <Container textAlign="center">
            <h2 style={{ color: 'blue' }}>{menuData.name}</h2>
            <Menu menuDataCategory={menuData.categories} />
          </Container>
        </Grid.Column>
      );
    })
  ) : (
    <div>"We are updating our menus"</div>
  );
};

export default MenuList;
