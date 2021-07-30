const express = require('express')
const app = express()
const port = 3000

// require middlewares:
const logger = require("./middlewares/logger.js")

app.listen(port, ()=> {
    console.log(`*** Listening on port ${port} ***`)
})

app.use(logger)
app.use(express.static("client"))
app.use(express.json())


app.get('/', (req, res)=> {
    const testing123 = {"testing":"Mike test, 1... 2?"}
    res.json(testing123)
})
