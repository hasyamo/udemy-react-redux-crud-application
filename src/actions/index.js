import axios from 'axios';
export const READ_EVENETS = 'READ_EVENETS'
export const CREATE_EVENET = 'CREATE_EVENET'

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
 
