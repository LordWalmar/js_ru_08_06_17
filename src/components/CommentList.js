import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import {connect} from 'react-redux'
import {loadArticleComments} from '../AC'
import toggleOpen from '../decorators/toggleOpen'
import Loader from './Loader'

class CommentList extends Component {

    componentWillReceiveProps({ isOpen, article, loadArticleComments }) {
        if (isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        const text = isOpen ? 'hide comments' : 'show comments'

        return (<div>
            <button onClick={toggleOpen}>{text}</button>
            {getBody({article, isOpen})}
        </div>)
    }
}

CommentList.propTypes = {
    comments: PropTypes.array,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

function getBody({article: {comments = [], id, commentsLoading, commentsLoaded}, isOpen}) {
    if (!isOpen) return null
    console.log('commentsLoading', commentsLoading)
    if (commentsLoading) return <Loader/>
    if (!commentsLoaded) return null
    if (!comments.length) return (
        <div>
            <p>No comments yet</p>
            <CommentForm articleId = {id} />
        </div>
    )
    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id = {id}/></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

export default connect(null, {loadArticleComments})(toggleOpen(CommentList))