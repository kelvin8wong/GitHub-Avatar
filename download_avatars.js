var request = require('request');
var fs = require('fs');

//introductoion
console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var GITHUB_USER = "kelvin8wong";
  var GITHUB_TOKEN = "1d088ff710e91bed8f00d83ebe967d778dbe1bb2";

  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
  //console.log(requestURL); to test requestURL

  //pass custom user-agent string to access API
  const options = {
    url: requestURL,
    headers: {
      'User-Agent': 'GitHub Avatar Downloader - Student Project'
    }
  };

//print out avatar url
  request (options, function(err, response, body){
    var contributors = JSON.parse (body);
     contributors.forEach(function(item) {
      console.log(item.avatar_url);
    })


  })

}
//implement downloadImage function
function downloadImageByURL(url, filePath) {

request.get(url)
       .pipe(fs.createWriteStream('./downloaded.html'));

}

downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg")

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", avatar_url);
});