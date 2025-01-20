var libPrefix = "testLib";

function sendRequest(url) {
  HTTP.get({
    url: url,
    success: libPrefix + 'onResponse'
  });
}

function onResponse() {
  // Automatically handles the response
  return JSON.parse(content); // Sends the response content as a message
}

on(libPrefix + 'onResponse', onResponse);

// Publish the sendRequest function to make it available for bots
publish({
  sendRequest: sendRequest
});
