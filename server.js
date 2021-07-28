const express = require('express')
const app = express()

const port = 3000

app.use(express.json())

app.listen(port, ()=> {
    console.log(`*** Listening on port ${port} ***`);
});

app.get('/', (req, res)=> {
    const testing123 = {"testing":"Mike test, 1... 2?"}
    res.json(testing123);
});

// Stop doing this