const pg = require('pg')

const db = new pg.Pool({
  database: 'quiz_watch'
})

module.exports = db