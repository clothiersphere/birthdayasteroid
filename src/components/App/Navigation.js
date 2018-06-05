import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: null };
  }

  handleItemClick = (e, { name }) => {
    if (name === 'sendBirthdayAsteroid') {
      this.props.history.push('/birthdayAsteroid');
    }

    if (name === 'home') {
      this.props.history.push('/');
    }

    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div className="navigation">
        <Menu inverted>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="sendBirthdayAsteroid"
            active={activeItem === 'sendBirthdayAsteroid'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="about"
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </div>
    );
  }
}
