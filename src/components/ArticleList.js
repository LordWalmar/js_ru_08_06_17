import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Article from './Article'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    getFilteredArticles () {
        const {filters, articles} = this.props;
        let filteredArticles = articles;

        if (filters.select.length) {
            filteredArticles = filteredArticles.filter((article) => {
                for (const filter of filters.select){
                    if (article.id === filter.value) {
                        return true
                    }
                }
            })
        }

        if (filters.dateRange.from) {
            filteredArticles = filteredArticles.filter((article) => {
                return new Date(article.date).getTime() >= filters.dateRange.from.getTime()
            })
        }

        if (filters.dateRange.to) {
            filteredArticles = filteredArticles.filter((article) => {
                return new Date(article.date).getTime() <= filters.dateRange.to.getTime()
            })
        }
        return filteredArticles
    }

    render() {
        const { openItemId, toggleOpenItem } = this.props
        const filteredArticles = this.getFilteredArticles();
        const articleElements = filteredArticles.map(article => <li key={article.id}>
            <Article
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles,
    filters: state.filters
}))(accordion(ArticleList))