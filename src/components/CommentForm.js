import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './CommentForm.css'

class CommentForm extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        comment: ''
    }

    render() {
        return (
            <div>
                User: <input className={this.getUserErrorClass(this.state.username)} type = 'text' value = {this.state.username} onChange = {this.handleUserChange} />
                Comment: <textarea className={this.getCommentErrorClass(this.state.comment)} rows="5" cols="30" value = {this.state.comment} onChange = {this.handleCommentChange}/>
            </div>
        )
    }


    getUserErrorClass = (value) => {
        if ( value.length < 5 || value.length > 15 ) {
           return 'error';
        }
        return '';
    }

    getCommentErrorClass = (value) => {
        if ( value.length < 20 || value.length > 50 ) {
            return 'error';
        }
        return '';
    }

    handleUserChange = (ev) => {
        this.setState({
            username: ev.target.value
        })
    }

    handleCommentChange = (ev) => {
        this.setState({
            comment: ev.target.value
        })
    }

}

export default CommentForm