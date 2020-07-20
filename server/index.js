const cors = require('cors')
const express = require('express')
const path = require('path')
const helmet = require('helmet')
const morgan = require('morgan')
const { default: fetch } = require('node-fetch')
var Discogs = require('disconnect').Client;
const PORT = process.env.PORT || 5000
var requestedData
var accessedData

express()
  .use(helmet())
  .use(morgan('dev'))
  .use(express.json())
  .use(express.urlencoded({extended:true}))
  .use(cors())
  .use('/api', require('./api'))
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'src'))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('public/index.html'))
  .get('/authorize', function(req, res){
    var oAuth = new Discogs().oauth();
    oAuth.getRequestToken(
      'QPZOfgFPhemoWqOgOXHG',
      'hprzWPmDmuFFLxdRnwiekaOTcyqmHSVa',
      function(err, requestData){
        requestedData = requestData
        // Persist "requestData" here so that the callback handler can
        // access it later after returning from the authorize url
        res.redirect(requestedData.authorizeUrl);
      }
    );
  })
  .get('/callback', function(req, res){
    var oAuth = new Discogs(requestedData).oauth();
    oAuth.getAccessToken(
      req.query.oauth_verifier, // Verification code sent back by Discogs
      function(err, accessData){
        accessedData=accessData
        console.log(accessedData)
        // Persist "accessData" here for following OAuth calls
        res.send('Received access token!');
      }
    );
  })
  .get('/identity', function(req, res){
    var dis = new Discogs(accessedData);
    dis.getIdentity(function(err, data){
      fetch('https://api.discogs.com/database/search?q={cher}&{?type,title,release_title,credit,artist,anv,label,genre,style,country,year,format,catno,barcode,track,submitter,contributor}')
          .then(response => response.json())
          .then(data => {
          console.log(data)
        })
      res.send(data);
    });
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
