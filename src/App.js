import React from 'react';
import {
  Grid,
  Container,
  Image,
  Button,
  Icon,
  Header,
  Item,
} from 'semantic-ui-react';

import TestDataContextProvider from './contexts/TestDataContext';
import TestCard from './components/TestCard';
// import Menu from './components/Menu';
import Navbar from './components/Navbar';
import MenuList from './components/MenuList';
import './App.css';

function App() {
  return (
    <>
      <TestDataContextProvider>
        <Grid.Row>
          <Navbar fluid />
        </Grid.Row>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Container textAlign="center">
                <Header as="h1">Meiva's Menu</Header>
              </Container>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <MenuList />
            {/* should be in menu */}
            {/* <Grid.Column width={8}>
              <Container textAlign="center">
                <Menu />
              </Container>
            </Grid.Column> */}
            <Grid.Column width={8}>
              <Container>Container 2</Container>
            </Grid.Column>
            <Grid.Column width={8}>
              <Container>Container 3</Container>
            </Grid.Column>
            <Grid.Column width={8}>
              <Container>Container 4</Container>
            </Grid.Column>
            {/* Should be in be menu  */}
          </Grid.Row>
        </Grid>
      </TestDataContextProvider>
    </>
  );
}

export default App;

{
  /* <TestCard />
<div className="App">
  <Button color={'red'} icon size={'massive'}>
    Primary
    <Icon name="world" />
  </Button>
</div> */
}
