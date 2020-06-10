import _ from 'lodash'
import {
    READ_EVENETS,
    READ_EVENET,
    CREATE_EVENET,
    UPDATE_EVENET,
    DELETE_EVENET,
} from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENET:
        case UPDATE_EVENET:
        case READ_EVENET:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case READ_EVENETS:
            return _.mapKeys(action.response.data, "id")
        case DELETE_EVENET:
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}