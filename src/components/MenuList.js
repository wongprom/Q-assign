import React, { useContext } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import Menu from '../components/Menu';
import { TestDataContext } from '../contexts/TestDataContext';
const MenuList = (props) => {
  const [menusData] = useContext(TestDataContext);

  // const dynamicSort = (property) => {
  //   var sortOrder = 1;
  //   if (property[0] === '-') {
  //     sortOrder = -1;
  //     property = property.substr(1);
  //   }
  //   return function (a, b) {
  //     if (sortOrder == -1) {
  //       return b[property].localeCompare(a[property]);
  //     } else {
  //       return a[property].localeCompare(b[property]);
  //     }
  //   };
  // };
  //* sorting menus alphabetically
  // menusData.sort(dynamicSort('name'));
  menusData.sort((a, b) => (a.name > b.name ? 1 : -1));
  return menusData ? (
    menusData.map((singleMenuData) => {
      return (
        <Grid.Column key={singleMenuData.name} width={8}>
          <Container textAlign="center">
            <h2>{singleMenuData.name}</h2>
            <Menu singleMenuData={singleMenuData} />
          </Container>
        </Grid.Column>
      );
    })
  ) : (
    <div>"We are updating our menus"</div>
  );
};

export default MenuList;
