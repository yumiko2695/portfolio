import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import getArtistsReducer from './artists'
import lastfmProfilesReducer from "./getlastfm";
import getDiscogsReleasesReducer from './discogs'

const reducer = combineReducers({
  artists: getArtistsReducer,
  lastfmProfiles: lastfmProfilesReducer,
  discogsReleases: getDiscogsReleasesReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
