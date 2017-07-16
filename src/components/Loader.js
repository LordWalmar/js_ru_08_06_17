import React from 'react'
import PropTypes from 'prop-types'
import LocalizationText from './LocalizationText'

function Loader(props) {
    return (
        <div>
            <h2>
                <LocalizationText>Loading</LocalizationText>
                ...
            </h2>
        </div>
    )
}

Loader.propTypes = {
}

export default Loader