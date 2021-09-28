import dotenv from 'dotenv'
import express from 'express'

// initialize configuration
dotenv.config()

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.PORT

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
