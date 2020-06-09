import React from 'react';
import { Grid, Container, Header } from 'semantic-ui-react';

import TestDataContextProvider from './contexts/TestDataContext';
import SortMenu from './components/FilterMenu';
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
          <Grid.Row textAlign="center">
            <SortMenu />
          </Grid.Row>
          <Grid.Row>
            <MenuList />
          </Grid.Row>
        </Grid>
      </TestDataContextProvider>
    </>
  );
}

export default App;
