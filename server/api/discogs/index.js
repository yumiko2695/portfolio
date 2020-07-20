const router = require('express').Router()
const fetch = require('node-fetch')
var Discogs = require('disconnect').Client;

var requestData
var accessData

module.exports = router


router.get('/authorize', function(req, res){
  var oAuth = new Discogs().oauth();
  oAuth.getRequestToken(
    'QPZOfgFPhemoWqOgOXHG',
    'hprzWPmDmuFFLxdRnwiekaOTcyqmHSVa',
    'http:locahost:5000/oauth/callback', // ?what do i put here?
    function(err, requestedData){
      requestData = requestedData;
      // Persist "requestData" here so that the callback handler can
      // access it later after returning from the authorize url
      res.redirect(requestData.authorizeUrl);
    }
  );
})
router.get('/callback', function(req, res){
  var oAuth = new Discogs(requestData).oauth();
  oAuth.getAccessToken(
    req.query.oauth_verifier, // Verification code sent back by Discogs
    function(err, accessedData){
      accessData = accessedData
      console.log(accessData)
      // Persist "accessData" here for following OAuth calls
      res.send('Received access token!');
    }
  );
})
router.get('/identity', function(req, res){
  var dis = new Discogs(accessData);
  dis.getIdentity(function(err, data){
    res.send(data);
    console.log()
  });
});


function search(){
    fetch('https://api.discogs.com/database/search?q=cher&type=artist&artist=cher', accessData)
    .then(response => response.json())
    .then(data => {
          console.log(data)
       })
}
search();

router.get('/', function(req, res){
  const params = {query: 'cher', type: 'artist', artist:'artist'}
  var db = new Discogs(accessData).database();
      db.search(params, function(err, data){
        console.log(data)
        console.log(err);
    });
})

