import axios from 'axios'
require('../secrets')

const GET_LASTFM_PROFILE = 'GET_LASTFM_PROFILE'


const getLastfmProfile = artistObj => ({
  type: GET_LASTFM_PROFILE,
  artistObj
})

export const getLastfmProfileThunk = (artist) => {
  return async dispatch => {
    try {
      const profile = await axios.get(`/api/lastfm?artist=${artist}`)
      dispatch(getLastfmProfile(profile))
    }
      catch(error) {
      console.log(error)
    }
  }
}

const initialState = {};

const getLastfmProfilesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_LASTFM_PROFILE:
      return action.artistObj
    default:
      return state
  }
}

export default getLastfmProfilesReducer
