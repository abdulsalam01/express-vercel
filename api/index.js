// Use "type: commonjs" in package.json to use CommonJS modules
const express = require('express');
const app = express();
 
// Define your routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from Bandung!' });
});
 
// Export the Express app
module.exports = app;