import {FILTER_SELECT_CHANGE, FILTER_DATERANGE_CHANGE} from '../constants'
const defaultFilters = {
    select: [],
    dateRange: {from: null, to: null}
};

export default (filtersState = defaultFilters, action) => {
    const {type, payload} = action

    switch (type) {
        case FILTER_SELECT_CHANGE:
            return {
                ...filtersState,
                select: payload.select
            }
    }

    switch (type) {
        case FILTER_DATERANGE_CHANGE:
            return {
                ...filtersState,
                dateRange: payload.dateRange
            }
    }

    return filtersState
}