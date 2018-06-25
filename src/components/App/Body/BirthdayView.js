import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Button, Form, Segment, Label, Icon } from 'semantic-ui-react';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class BirthdayView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: '',
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

    if (birthday === '') {
      alert('please select a birthdate');
      return;
    }

    if (recipientMobile === '') {
      alert('please select a recipientMobile');
      return;
    }

    if (senderEmail === '') {
      alert('please select a senderEmail');
      return;
    }

    // validation


    const entryInfo = {
      birthday,
      senderEmail,
      recipientMobile,
    };

    this.props.createBdayEntry(entryInfo);

    this.setState({
      startDate: '',
      senderEmail: '',
      birthday: '',
      recipientMobile: '',
    });
  }

  render() {
    const {
      // APOD,
      createBdayEntry,
      submitDate,
      neo,
      entry,
    } = this.props;

    return (
      <div>
        <div className="birthday-view">
          <Segment inverted>
            <Form
              inverted
              onSubmit={() => this.handleSubmit()}
            >
              <Form.Input>
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

                label="recipient's mobile #"
                placeholder="mobile number"
                name="recipientMobile"
                value={this.state.recipientMobile}
                onChange={this.handleChange}
              />
              <Form.Input
                icon="mail"
                iconPosition="left"

                label="sender's e-mail address"
                placeholder="sender's email address"
                name="senderEmail"
                value={this.state.senderEmail}
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
      </div>
    );
  }
}
