const router = require('express').Router()
 const scrape = require('../../scrape/index.js')

// const artists = require('../../scrape/post.csv');

module.exports = router


router.get('/', async (req, res, next) => {
  try {
    const artists = await scrape.scraper(req.query.eventUrl);
    res.send(artists);
  } catch(e) {
    console.log(e)
    next(e);
  }
})