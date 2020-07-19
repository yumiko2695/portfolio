const router = require('express').Router()
const searchForArtist = require('./apicall')

module.exports = router


router.get('/', async (req, res, next) => {
  try {
    const artist = await req.params.artist.toLowerCase();
    let result = await searchForArtist(artist);
    res.send(result);
  } catch(e) {
    console.log(e)
    next(e);
  }
})
