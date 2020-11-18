const express = require('express')
const apiRouter = require('./Routers/api-router.js');
const foodRouter = require('./Routers/food-router.js');
const app = express()
const port = 8080

app.use("/api", apiRouter);
app.use("/foodtracking", foodRouter);

app.listen(port, () => {
  console.log(`Example app listening at https://localhost:${port}`)
})