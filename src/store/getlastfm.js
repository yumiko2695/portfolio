import axios from 'axios'
require('../secrets')

const GET_LASTFM_PROFILE = 'GET_LASTFM_PROFILE'
const SET_LASTFM_PROFILE = 'SET_LASTFM_PROFILE';

const getLastfmProfile = artistObj => ({
  type: GET_LASTFM_PROFILE,
  artistObj
})

const setLastfmProfile = artistObj => ({
  type: GET_LASTFM_PROFILE,
  artistObj
})

export const getLastfmProfileThunk = (artist) => {
  console.log(artist)
  return async dispatch => {
    try {
      const profile = await axios.get(`/api/lastfm/${artist}`)
      dispatch(getLastfmProfile(profile))
    }
      catch(error) {
      console.log(error)
    }
  }
}

export const setLastfmProfileThunk = (artist) => {
  return async dispatch => {
    try {
      const profile = await axios.get(`/api/lastfm/${artist}`)
      dispatch(getLastfmProfile(profile))
    }
      catch(error) {
      console.log(error)
    }
  }
}

const initialState = {
  profiles: [],
  current: {}
};

const getLastfmProfilesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_LASTFM_PROFILE:
      return {...state, profiles: [...state.profiles, action.artistObj]}
    case SET_LASTFM_PROFILE:
      return {...state, current: action.artist}
    default:
      return state
  }
}

export default getLastfmProfilesReducer
