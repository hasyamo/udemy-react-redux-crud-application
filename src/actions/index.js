import axios from 'axios';
export const READ_EVENETS = 'READ_EVENETS'
export const READ_EVENET = 'READ_EVENET'
export const CREATE_EVENET = 'CREATE_EVENET'
export const UPDATE_EVENET = 'UPDATE_EVENET'
export const DELETE_EVENET = 'DELETE_EVENET'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1/'
const QUERYSTRING = '?token=token123'

 export const readEvents = () =>  async dispatch => {
     const response =  await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
     dispatch({ type: READ_EVENETS, response });
 }
 
 export const postEvent = values =>  async dispatch => {
     const response =  await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
     dispatch({ type: CREATE_EVENET, response });
 }

export const putEvent = values => async dispatch => {
    const response =  await axios.put(`${ROOT_URL}/events/${values.id}${QUERYSTRING}`, values)
     dispatch({ type: UPDATE_EVENET, response });
}

 export const getEvent = id => async dispatch => {
     const response =  await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
     dispatch({ type: READ_EVENET, response });
 }
 
 export const deleteEvent = id =>  async dispatch => {
     await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
     dispatch({ type: DELETE_EVENET, id });
 }
