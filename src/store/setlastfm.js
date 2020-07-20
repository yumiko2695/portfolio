require('../secrets')

const SET_LASTFM_PROFILE = 'SET_LASTFM_PROFILE';


const setLastfmProfile = artistObj => ({
  type: SET_LASTFM_PROFILE,
  artistObj
})

export const setLastfmProfileThunk = (artistName, lastfmArr) => {
  return async dispatch => {
    try {
      let reduced = await lastfmArr.filter((obj) => {
        if(obj.aritst.name === artistName) {
          return obj;
        }
      })
        dispatch(setLastfmProfile(reduced[0]))
    }
      catch(error) {
      console.log(error)
    }
  }
}

const initialState = {};

const setLastfmProfileReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LASTFM_PROFILE:
      return {...action.artistObj}
    default:
      return state
  }
}

export default setLastfmProfileReducer
