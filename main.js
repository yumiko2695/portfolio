
'use strict'
//requiring our app
const app = require('./server/index')

//requireing our database
//const {db} = require('./server/db');


const port = process.env.PORT || 1234; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});
