var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://api.giphy.com/v1/gifs/search?limit=10&q=cannibal&api_key=dc6zaTOxFJmzC",
  "method": "GET",
  "headers": {},
  "data": "{}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});