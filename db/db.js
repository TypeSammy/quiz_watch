const pg = require('pg')

const db = new pg.Pool({
  database: 'quiz_watch'
})

// // CONFIRM prior to deployment to heroku
// let pool;
// if (process.env.NODE_ENV === 'production') {
//   pool = new Pool({
//     connectionString: process.env.DATABASE_URL,
//     ssl: {
//       rejectUnauthorized: false
//     }
//   })
// } else {
//   pool = new Pool({
//     database: 'quiz_watch'
//   })
// }

module.exports = db