import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import toggleOpenArticle from '../decorators/toggleOpenArticle'

function ArticleList({articles = [], openArticleId, isOpen, toggleOpenArticle}) {
    const articleElements = articles.map(article => <li key={article.id}>
        <Article
            article = {article}
            isOpen = { (article.id === openArticleId) && isOpen }
            toggleOpen = {toggleOpenArticle(article.id)}
        />
    </li>)

    return (
        <ul>
            {articleElements}
        </ul>
    )
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    isOpen: PropTypes.bool.isRequired,
    openArticleId: PropTypes.string,
    toggleOpenArticle: PropTypes.func.isRequired
}


export default toggleOpenArticle(ArticleList)