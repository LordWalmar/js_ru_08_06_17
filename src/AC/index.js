import {
    DELETE_ARTICLE,
    INCREMENT,
    FILTER_DATERANGE_CHANGE,
    FILTER_SELECT_CHANGE
} from '../constants'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function changeFilterSelect(select) {
    return {
        type: FILTER_SELECT_CHANGE,
        payload: { select }
    }
}

export function changeFilterDateRange(dateRange) {
    return {
        type: FILTER_DATERANGE_CHANGE,
        payload: { dateRange }
    }
}