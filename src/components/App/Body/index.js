import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button, Confirm, Message, Modal, Header, Icon } from 'semantic-ui-react';
import HomeView from './HomeView';
import BirthdayView from './BirthdayView';


export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      visible: false,
      modalOpen: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entry.error === 'entry_exists') {
      this.setState({ modalOpen: true });
    }
  }

  // open = () => { this.setState({ open: true }); }
  // close = () => { this.setState({ open: false }); }
  handleClose = () => {
    this.props.dataReset();
    this.setState({ modalOpen: false });
  }

  // handleDismiss = () => {
  //   this.setState({ visible: false });

  //   setTimeout(() => {
  //     this.setState({ visible: true });
  //   }, 2000);
  // }

  isError() {
    if (this.props.entry.error) {
      return true;
    }
    return false;
  }


  render() {
    const { props } = this;
    const { entry, dataReset } = props;

    // const errorBanner = () => {
    //   if (entry.error === 'entry_exists') {
    //     return (
    //       <div>
    //         Someone has already created a birthday asteroid for the owner of that mobile!
    //       </div>
    //     );
    //   }
    //   return <div />;
    // };
    // {errorBanner()}
    const dupeMobile = <h3> Someone has already created a birthday asteroid for {entry.recipientMobile}. Try again next year or send one to someone else. </h3>;

    return (
      <div className="body">
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size="small"
        >
          <Header icon="exclamation triangle" content="Submission Error" />
          <Modal.Content>
            {dupeMobile}
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" onClick={this.handleClose} inverted>
              <Icon name="checkmark" /> Got it
            </Button>
          </Modal.Actions>
        </Modal>
        <div>
          <Switch>
            <Route exact path="/birthdayAsteroid" render={routeProps => <BirthdayView {...routeProps} {...props} />} />
            <Route exact path="/" render={routeProps => <HomeView {...routeProps} {...props} />} />
          </Switch>
        </div>
      </div>

    );
  }
}

