const express = require('express')
const apiRouter = require('./routers/api-router.js');
const foodRouter = require('./routers/food-router.js');
const flaresRouter = require('./routers/flares-router.js')
const app = express()
const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/diary", { useNewUrlParser: true }).then(() => console.log("connected")).catch((err) => console.log(err))


//mongodb://127.0.0.1:27017/diary'
const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Successfully connected to the db'))

// console.log(mongoose.connection.readyState)

app.use(express.json())

app.use("/api", apiRouter);
app.use("/foodtracking", foodRouter);
app.use("/flaretracking", flaresRouter)

app.listen(8080, () => {
  console.log(`Server is listening`)
})