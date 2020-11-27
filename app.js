const express = require('express')
const apiRouter = require('./routers/api-router.js');
const foodRouter = require('./routers/food-router.js');
const flaresRouter = require('./routers/flares-router.js')
const blogsRouter = require('./routers/blogs-router.js')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');

// Connection to the Database
mongoose.connect("mongodb://127.0.0.1:27017/diary", { useNewUrlParser: true }).then(() => console.log("connected")).catch((err) => console.log(err))

app.use(express.json())
app.use(cors())

//routes
app.use("/api", apiRouter);
app.use("/foodtracking", foodRouter);
app.use("/flaretracking", flaresRouter)
app.use("/blog", blogsRouter)


process.env.PORT = 8081;

app.listen(process.env.PORT, process.env.IP, () => console.log(`Listening on ${process.env.PORT}`));