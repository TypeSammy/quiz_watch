const pg = require('pg')

// const db = new pg.Pool({
//   database: 'flashcardsdb'
// })

let pool;
if (process.env.NODE_ENV === 'production') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  })
} else {
  pool = new pg.Pool({
    database: 'flashcardsdb'
  })
}

module.exports = db