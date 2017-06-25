import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import {changeFilterDateRange} from '../../AC'
import {connect} from 'react-redux'

import 'react-day-picker/lib/style.css';

class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (day) => {
        const dateRange = DateUtils.addDayToRange(day, this.state);
        this.props.changeFilterDateRange(dateRange)
        this.setState(dateRange)
    }

    render() {
        const { from, to } = this.state;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(null, { changeFilterDateRange })(DateRange)