const express = require('express')
const apiRouter = require('./routers/api-router.js');
const foodRouter = require('./routers/food-router.js');
const flaresRouter = require('./routers/flares-router.js')
const app = express()
const port = 8080

app.use("/api", apiRouter);
app.use("/foodtracking", foodRouter);
app.use("/flaretracking", flaresRouter)

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
})