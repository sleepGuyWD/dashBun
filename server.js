const express = require("express")
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require("mongoose")

const PORT = process.env.PORT | 2121

  //*Import functions/routes

//todo - Connect to Database
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB Connected')
  } catch (err) {
    console.log(err)
  }

}
connectToDB()

//todo - Set Middleware


app.use(cors())
app.use(express.json())


//todo - Set Routes


//todo - Start Server



app.get("/", (req, res) => {
  res.send('Helllooooo')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))