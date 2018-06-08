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
      senderEmail: '',
      birthday: '',
      recipientMobile: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.datePickerChange = this.datePickerChange.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  datePickerChange(date) {
    this.setState({
      startDate: date,
      birthday: date.format('YYYY-MM-DD'),
    });
  }

  handleSubmit() {
    const {
      birthday,
      senderEmail,
      recipientMobile,
    } = this.state;

    this.setState({
      birthday,
      senderEmail,
      recipientMobile,
    });
  }

  render() {
    const {
      // APOD,
      createBdayEntry,
      submitDate,
      neo,
    } = this.props;

    const {
      birthday,
      senderEmail,
      recipientMobile,
    } = this.state;

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
          <Form
            inverted
            onSubmit={() => this.handleSubmit()}
          >
            <Form.Input fluid>
              <Label>
                <Icon name="birthday" position="left" />
              </Label>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.datePickerChange}
                minDate={moment().dayOfYear(1)}
                maxDate={moment().dayOfYear(365)}
                todayButton="Today"
                placeholderText="Select a birth date"
              />
            </Form.Input>
            <Form.Input
              icon="mobile"
              iconPosition="left"
              fluid
              label="recipient's mobile #"
              placeholder="mobile number"
              name="recipientMobile"
              value={recipientMobile}
              onChange={this.handleChange}

            />
            <Form.Input
              icon="mail"
              iconPosition="left"
              fluid
              label="sender's e-mail address"
              placeholder="sender's email address"
              name="senderEmail"
              value={senderEmail}
              onChange={this.handleChange}

            />
            <div className="birthday-button">
              <Button type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Segment>
      </div>
    );
  }
}
