import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './HomeView';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { props } = this;

    return (
      <div className="body">
        <Switch>
          <Route exact path="/" render={routeProps => <HomeView {...routeProps} {...props} />} />
        </Switch>
      </div>

    );
  }
}

