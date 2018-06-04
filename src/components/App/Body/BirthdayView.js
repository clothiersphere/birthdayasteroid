import React from 'react';
import DatePicker from 'react-datepicker';
import { Button } from 'semantic-ui-react';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import APODcard from './APODcard';

class BirthdayView extends Component {
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
      APOD,
      submitDate,
      asteroidList,
    } = this.props;

    return (
      <div className="birthday-view">
        <div className="datePicker">
          <DatePicker
            placeholderText="Select a birthday date"
            selected={this.state.startDate}
            onChange={this.handleChange}
            minDate={moment().dayOfYear(1)}
            maxDate={moment().dayOfYear(365)}
            todayButton="Today"
          />
          <Button
            onClick={() => submitDate(this.state.startDate.format('YYYY-MM-DD'))}
          >
          HAPPYBIRTHDAY
          </Button>
        </div>
      </div>
    );
  }
}
