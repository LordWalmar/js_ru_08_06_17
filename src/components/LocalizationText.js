import React, { PropTypes } from 'react'

LocalizationText.contextTypes = {
    dictionary: PropTypes.object.isRequired
}

LocalizationText.propTypes = {
    children: PropTypes.string
}

function LocalizationText(props, context) {
    return <span>{context.dictionary[props.children] || props.children}</span>
}

export default LocalizationText