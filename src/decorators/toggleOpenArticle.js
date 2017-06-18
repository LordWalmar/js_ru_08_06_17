import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        openArticleId: null,
        isOpen: true
    }

    render() {
        console.log('render')
        return <OriginalComponent {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
    }

    toggleOpenArticle = openArticleId => ev => {

        console.log('toggleOpenArticle')
        if (openArticleId === this.state.openArticleId) {
            this.setState({ isOpen: !this.state.isOpen })
        } else {
            this.setState({ openArticleId })
        }
    }
}