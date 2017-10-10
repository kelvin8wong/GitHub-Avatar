var request = require('request');
var fs = require('fs');


const repoOwner = process.argv[2];
const repoName = process.argv[3];


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
       downloadImageByURL(item.avatar_url, 'avatar/' + item.login + '.jpg')
    })
  })
}

//implement downloadImage function
function downloadImageByURL(url, filePath) {
  request.get(url)
        .on('end', function () {
          console.log('Download complete!')
        })
       .pipe(fs.createWriteStream(filePath));
}

// make the required arguments
if (process.argv.length !== 4) {
  console.log("You must provide a repo owner and  name.");
  console.log("Usage: node download_avatars.js <repoOwner> <repoName>");

} else {
  console.log(`Welcome to the Github Avatar Downloader!`);

  getRepoContributors(repoOwner, repoName, function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
  });
}
