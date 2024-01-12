//todo - Declare Variables

const express = require("express")
const app = express()
const PORT = process.env.PORT | 2121

const mongoose = require("mongoose")


  //*Import functions/routes

//todo - Connect to Database
mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err))

//todo - Set Middleware

app.use(express.json())


//todo - Set Routes


//todo - Start Server



app.get("/", (req, res) => {
  res.send('Helllooooo')
})

app.listen(PORT, () => console.log(`Listning on port ${PORT}`))