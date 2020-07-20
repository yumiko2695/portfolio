const fetch = require('node-fetch');
const router = require('express').Router()
// const discogsscript = require('./discogsscript.js')

module.exports = router

var Discogs = require('disconnect').Client;

// Authenticate by user token
//var dis = new Discogs({userToken: 'YOUR_USER_TOKEN'});

// Authenticate by consumer key and secret
var dis = new Discogs({
	consumerKey: 'QPZOfgFPhemoWqOgOXHG',
	consumerSecret: 'hprzWPmDmuFFLxdRnwiekaOTcyqmHSVa'
});

var db = new Discogs().database();
      db.search({q: '{cher}&{?type,title,release_title,credit,artist,anv,label,genre,style,country,year,format,catno,barcode,track,submitter,contributor}' }, function(err, data){
        console.log(data)
    });

// var db2 = new Discogs().database();
// db2.getRelease(176126, function(err, data){
// 	console.log(data);
// });

fetch('https://api.discogs.com/database/search?q=cher&type=artist&artist=cher')
 .then(response => response.json())
 .then(data => {
    console.log(data)
 })


// router.get('/', async (req, res, next) => {
//   try {
//     const artist = await req.query.artist

//     const db = new Discogs().database();
//       db.search('cher', function(err, data){
//         console.log(data)
//        return data;
//     });
//     res.send(db);
//   } catch(e) {
//     console.log(e)
//     next(e);
//   }
// })
