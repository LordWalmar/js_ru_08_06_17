import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import UserForm from './UserForm'
import Select from 'react-select'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-select/dist/react-select.css'
import 'react-day-picker/lib/style.css';

class App extends Component {
    static propTypes = {

    };

    state = {
        selection: null,
        from: null,
        to: null
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    };

    render() {
        const {from, to, selection} = this.state
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <UserForm />
                <Select options = {options} value = {selection} onChange = {this.changeSelection} multi />
                <DayPicker
                    numberOfMonths={2}
                    selectedDays={[from, { from, to }]}
                    onDayClick={this.handleDayClick}
                    fixedWeeks
                />
                { from !== null && to !== null &&
                    <p>{`You chose from ${from.toISOString().slice(0, 10)} to ${to.toISOString().slice(0, 10)}.`}</p>
                }
                <ArticleList articles = {articles} defaultOpenId = {articles[0].id}/>
                <ArticlesChart articles = {articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({ selection })
}

export default App