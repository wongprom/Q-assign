import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const TestCard = () => (
  <Card>
    <Image
      src="https://images.unsplash.com/photo-1575808142341-e39853744dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1084&q=80"
      wrapped
      ui={false}
    />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default TestCard;
