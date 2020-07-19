import axios from 'axios'


const GET_LASTFM_PROFILE = 'GET_LASTFM_PROFILE'


const getLastfmProfile = artistObj => ({
  type: GET_LASTFM_PROFILE,
  artistObj
})

export const getLastfmProfileThunk = (artist) => {
  return async dispatch => {
    try {
      let artistObj = {}
      const matches = await axios.get(`http://ws.audioscrobbler.com/2.0?method=artist.search&artist=${artist}&api_key=47b83d9adb28b0160e6766f97bf60d99&format=json`)
      // if(matches.results.artistmatches.artist[0].name.toLowerCase() === artist.toLowerCase()) {
      //     artistObj[artist.toLowerCase()] = matches.results.artistmatches.artist[0]
      //   }
      const results = await matches.data.results.artistmatches.artist[0]
      console.log(results);
      artistObj[artist]= await matches.data.results.artistmatches.artist[0]
        dispatch(getLastfmProfile(artistObj))
    }
      catch(error) {
      console.log(error)
    }
  }
}

const initialState = [];

const getLastfmProfilesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_LASTFM_PROFILE:
      return [...state, action.artistObj]
    default:
      return [...state]
  }
}

export default getLastfmProfilesReducer
