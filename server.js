if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const session = require('express-session')
const express = require('express')
const sessionsController = require('./controllers/session_controller/session_controller')
const app = express()

// require middlewares:

const sess = {
    secret : process.env.SESSION_SECRET,
    cookie : {}
}

if(process.env.NODE_ENV === 'production'){
    sess.cookie.secure = true;
    // app.set('trust proxy', 1); // not sure if strictly required
}

const logger = require("./middlewares/logger.js")

app.use(session(sess));
app.use(logger)
app.use(express.static("client"))
app.use(express.json())

app.use('/api/session', sessionsController)

const port = process.env.PORT || 3000;

app.listen( () => {
    console.log(`*** Listening on port ${port} ***`)
})