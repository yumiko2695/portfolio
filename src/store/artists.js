import axios from 'axios'
import cors from 'cors'
const cheerio = require('cheerio');
//import scrape from '../../scrape'

const GET_ARTISTS = 'GET_ARTISTS'


const getArtists = artists => ({
  type: GET_ARTISTS,
  artists
})

export const getArtistsThunk = eventUrl => {
  return async dispatch => {
    try {
      const artists = await axios.get('/api/artists/', {params: {
        eventUrl: `${eventUrl}`
      }})
      dispatch(getArtists(artists.data))
    } catch(error) {
      console.log(error)
    }
  }
}

const initialState = [];

const getArtistsReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_ARTISTS:
      return action.artists
    default:
      return state
  }
}

export default getArtistsReducer
