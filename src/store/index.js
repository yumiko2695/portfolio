import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import getArtistsReducer from './artists'
import getLastfmProfilesReducer from "./getlastfm";
import setLastfmProfileReducer   from './setlastfm';

const reducer = combineReducers({
  artists: getArtistsReducer,
  lastfmProfiles: getLastfmProfilesReducer,
  current: setLastfmProfileReducer,
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store
