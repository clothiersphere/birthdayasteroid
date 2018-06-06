import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Dropdown, Form, Segment, Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// import APODcard from './APODcard';

export default class BirthdayView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  render() {
    const {
      // APOD,
      submitDate,
      neo,
    } = this.props;

    // const months = [];
    // const days = [];
    // for (let i = 1; i <= 12; i += 1) {
    //   months.push({
    //     text: i,
    //     value: i,
    //   });
    // }

    // for (let i = 1; i <= 31; i += 1) {
    //   days.push({
    //     text: i,
    //     value: i,
    //   });
    // }

    // <Dropdown placeholder="Select Month" fluid selection options={months} />
    // <Dropdown placeholder="Select Days" fluid selection options={days} />


    return (
      <div className="birthday-view">
        <Segment inverted>
          <Form inverted>
            <Form.Input fluid >
              <Icon name="birthday" position="left" inverted />
              <DatePicker

                placeholderText="Select a birth date"
              />
            </Form.Input>
            <Form.Input icon="mobile" iconPosition="left" fluid label="recipient's mobile #" placeholder="mobile number" />
            <Form.Input icon="mail" iconPosition="left" fluid label="sender's e-mail address" placeholder="sender's email address" />
            <div className="birthday-button">
              <Button
                onClick={() => submitDate(this.state.startDate.format('YYYY-MM-DD'))}
              >
              Submit
              </Button>
            </div>
          </Form>
        </Segment>
      </div>
    );
  }
}
