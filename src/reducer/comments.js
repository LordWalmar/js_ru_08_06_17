import {ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS, FAIL} from '../constants'
import {OrderedMap, Record} from 'immutable'
import {arrToMap} from '../helpers'

const defaulComments = Record({
    entities: new OrderedMap({})
})

const defaultState = new defaulComments()

const CommentRecord = Record({
    id: undefined,
    user: undefined,
    text: undefined
})

export default (commentsState = defaultState, action) => {
    const {type, payload, randomId, response} = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.updateIn(
                ['entities', randomId],
                comment => new CommentRecord({...payload.comment, id: randomId})
            )

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState
                .set('entities', arrToMap(payload.response, CommentRecord))

        case LOAD_ARTICLE_COMMENTS + FAIL:
            console.log('payload.error', payload.error)
    }

    return commentsState
}