
const cheerio = require('cheerio');
const fetch = require('node-fetch');

function scraper(searchUrl) {
  return fetch(`${searchUrl}`)
    .then(response => response.text())
    .then(body => {
      const $ = cheerio.load(body);
      const lineupMedium = $('.lineup.medium');
      const lineUpHTML =  lineupMedium.html();
      let arr = lineUpHTML.split("<br>");
      arr = arr.map((str, i) => {
      if(i!==0) {
        return str.slice(1,str.length)
      } else {
        return str
      }
    })
    arr = arr.map((str) => {
      let i = str.indexOf('>');
      if(i === -1) {
        return str;
      } else {
        str = str.slice(i+1, str.length+1);
        let j = str.indexOf('<');
        str = str.slice(0, j);
        return str;
      }
    })
    console.log(arr);
    return arr;
    })
}

module.exports = {scraper}
