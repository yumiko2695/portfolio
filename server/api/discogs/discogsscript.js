'use strict';
var Discogs = require('disconnect').Client;

// Authenticate by user token
//var dis = new Discogs({userToken: 'YOUR_USER_TOKEN'});

// Authenticate by consumer key and secret
// var dis = new Discogs({
// 	consumerKey: 'QPZOfgFPhemoWqOgOXHG',
// 	consumerSecret: 'hprzWPmDmuFFLxdRnwiekaOTcyqmHSVa'
// });

// var db = new Discogs().database();
// db.getRelease(176126, function(err, data){
// 	console.log(data);
// });

// router.get('/authorize', function(req, res){
// 	var oAuth = new Discogs().oauth();
// 	oAuth.getRequestToken(
// 		'QPZOfgFPhemoWqOgOXHG',
// 		'hprzWPmDmuFFLxdRnwiekaOTcyqmHSVa',
// 		function(err, requestData){
// 			// Persist "requestData" here so that the callback handler can
// 			// access it later after returning from the authorize url
// 			res.redirect(requestData.authorizeUrl);
// 		}
// 	);
// });

//   const fetch = require('node-fetch');


// function search(name) {
//   return fetch(`http://ws.audioscrobbler.com/2.0?method=artist.getinfo&artist=${name}&api_key=47b83d9adb28b0160e6766f97bf60d99&format=json`)
//   .then(response => response.json())
//   .then(data => {
//     console.log('inside the function')
//     console.log(data)
//     return data
//   }).catch(e => {
//     console.log(e)
//   })
// }

module.exports = {search}
