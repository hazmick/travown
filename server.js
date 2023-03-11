const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "trav/build")));

// Handle all other routes with index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "trav/build", "index.html"));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
