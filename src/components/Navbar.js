import React, { useState } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Image, Item } from 'semantic-ui-react';
import logo from '../images/fork-and-knife-green-transparent.png';

const Navbar = () => {
  const [activeItem, setActive] = useState('menus');

  const handleItemClick = (e, { name }) => setActive(name);

  return (
    <Segment inverted>
      <Menu inverted secondary>
        <Item>
          <Image size="mini" src={logo} />
        </Item>
        <Menu.Menu position="right">
          <Menu.Item
            name="menus"
            active={activeItem === 'menus'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="active-menus"
            active={activeItem === 'active-menus'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Navbar;

//!----------------------------------------

// export default class MenuExampleInvertedSegment extends Component {
//   state = { activeItem: 'home' };

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {
//     const { activeItem } = this.state;

//     return (
//       <Segment inverted>
//         <Menu inverted secondary>
//           <Menu.Item
//             name="home"
//             active={activeItem === 'home'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name="messages"
//             active={activeItem === 'messages'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name="friends"
//             active={activeItem === 'friends'}
//             onClick={this.handleItemClick}
//           />
//         </Menu>
//       </Segment>
//     );
//   }
// }
