function tryRequest(url) {
  // Perform a GET request to the specified URL
  var response = HTTP.get({
    url: url,
    timeout: 10 // timeout in seconds
  });

  // Check if the request was successful
  if (response.status_code === 200) {
    return response.body; // Return the response text
  } else {
    return "Error: " + response.status_code + " - " + response.status_message;
  }
}

// Publish the function to make it available in bots
publish({
  try: tryRequest
});
