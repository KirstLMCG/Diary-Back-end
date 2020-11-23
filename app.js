const express = require('express')
const apiRouter = require('./routers/api-router.js');
const foodRouter = require('./routers/food-router.js');
const flaresRouter = require('./routers/flares-router.js')
const blogsRouter = require('./routers/blogs-router.js')
const app = express()
const mongoose = require('mongoose')

// Connection to the Database
mongoose.connect("mongodb://127.0.0.1:27017/diary", { useNewUrlParser: true }).then(() => console.log("connected")).catch((err) => console.log(err))

app.use(express.json())

//routes
app.use("/api", apiRouter);
app.use("/foodtracking", foodRouter);
app.use("/flaretracking", flaresRouter)
app.use("/blog", blogsRouter)

const { PORT = 8080 } = process.env;

app.listen(PORT, () => console.log(`Listening on ${PORT}...`));