const fetch = require('node-fetch');
require('../../../secrets');


function searchForArtist(name) {
  return fetch(`http://ws.audioscrobbler.com/2.0?method=artist.search&artist=${name}&api_key=$47b83d9adb28b0160e6766f97bf60d99?format=json?limit=3`)
  .then(matches => {
    console.log('inside the function')
    if(matches.artistmatches.artists[0].name.toLowerCase() === name) {
      return matches.artistmatches.artists[0];
    } else {
      return '';
    }
  }).catch(e => {
    console.log(e)
  })
}

module.exports = {searchForArtist}
