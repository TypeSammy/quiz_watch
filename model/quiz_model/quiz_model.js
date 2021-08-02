// use for the add function
`INSERT INTO quiz_reminders (testdate) VALUES (TIMESTAMP '2021-07-28 21:24:08');`

const session = require('express-session');
const db = require('../../db/db');

const Flashcards = {
    create(userId, category, question, hint, answer) {
        const sql = `
            INSERT INTO flashcards(user_id, category, question, hint, name)
            VALUES($1, $2, $3, $4, $5)
            RETURNING *
        `
        return db.query(sql, [userId, category, question, hint, answer])
            .then(dbResponse => {
                return dbResponse.rows[0]
            })
    },

    flashcardsForUser(userId) {
        const sql = `
            SELECT * FROM flashcards WHERE user_id = $1
        `
        return db.query(sql, [userId])
            .then(dbResponse => {
                return dbResponse.rows
            })
    }, 

    flashcardsDue(userId) {
        const sql = `
            SELECT * FROM flashcards WHERE user_id = $1 and reminder < now()
        `
        return db.query(sql, [userId])
            .then(dbResponse => {
                return dbResponse.rows
            })
    }, 

    updateFlashcardReminder(timestamp, flashcardId) {
        const sql = `
            UPDATE flashcards SET reminder = TIMESTAMP '$1' WHERE ID = $2;
        `
        return db.query(sql, [timestamp, flashcardId])
            .then(dbResponse => {
                return dbResponse.rows
            })
    }
}

module.exports = Flashcards;