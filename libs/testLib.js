libPrefix = "testLib";

function try(url) {
  HTTP.get({
    url: url,
    success: libPrefix + 'onResponse'
  });
}

function onResponse() {
  // Automatically handles the response
  Bot.sendMessage(content); // Sends the response content as a message
}

on(libPrefix + 'onResponse', onResponse);

// Publish the try function to make it available for bots
publish({
  try: try
});
