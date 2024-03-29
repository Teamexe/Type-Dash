// Import required modules
const express = require("express");

// Create an Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!"); // Respond with "Hello, World!" for requests to the root URL
});

// Start the server
const PORT = process.env.PORT || 3000; // Use the port provided by the environment or default to 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
