import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeFilterSelect} from '../../AC'

import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    state = {
        selected: []
    }

    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    handleChange = selected => {
        this.props.changeFilterSelect(selected)
        this.setState({selected})
    }

    render() {
        const { selected } = this.state
        const { articles } = this.props

        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return <Select
            options={options}
            value={selected}
            multi={true}
            onChange={this.handleChange}
        />
    }
}

export default connect(state => ({
    articles: state.articles
}), { changeFilterSelect })(SelectFilter)