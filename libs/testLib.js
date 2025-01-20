var libPrefix = "testLib";

// Store callback function
var callbackFunction;

function sendRequest(url, callback) {
  callbackFunction = callback; // Save the callback
  HTTP.get({
    url: url,
    success: libPrefix + 'onResponse'
  });
}

function onResponse() {
  // Automatically handles the response
  var jsonResponse = JSON.parse(content); // Parse the response JSON

  // Call the callback function with the parsed JSON
  if (typeof callbackFunction === "function") {
    callbackFunction(jsonResponse);
  }
}

on(libPrefix + 'onResponse', onResponse);

// Publish the sendRequest function to make it available for bots
publish({
  sendRequest: sendRequest
});
