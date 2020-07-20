const router = require('express').Router()
const script = require('./script.js')

module.exports = router


router.get('/:profile', async (req, res, next) => {
  try {
    const profile = await req.params.profile;
    console.log(profile)
    let result = await script.search(profile);
    res.send(result);
  } catch(e) {
    console.log(e)
    next(e);
  }
})
