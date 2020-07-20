const router = require('express').Router()
const script = require('./script.js')

module.exports = router


router.get('/', async (req, res, next) => {
  try {
    const artist = await req.query.artist
    let result = await script.search(artist);
    res.send(result);
  } catch(e) {
    console.log(e)
    next(e);
  }
})
