// Create web server
const express = require('express')
const app = express()
const port = 3000

// Use the public directory to serve static files
app.use(express.static('public'))

// Use the comments API to serve comments
app.use('/api/comments', require('./comments'))

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})