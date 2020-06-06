import _ from 'lodash'
import { READ_EVENETS } from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENETS:
            return _.mapKeys(action.response.data, "id")
        default:
            return events
    }
}