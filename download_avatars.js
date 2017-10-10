var request = require('request');

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

//
  request (options, function(err, response, body){
    var contributors = JSON.parse (body);
    console.log(contributors);
  })

}

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", avatar_url);
});