CREATE DATABASE quiz_watch;
\c quiz_watch

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username TEXT,
email TEXT,
password_digest TEXT
);

CREATE TABLE flashcards (
id SERIAL PRIMARY KEY,
user_id INT,
question TEXT,
hint TEXT,
answer TEXT,
answered_correctly INT,
answered_incorrectly INT,
reminder TIMESTAMP,
difficulty INT[], 
category TEXT
);

-- DUMMY DATA to test 

INSERT INTO flashcards (user_id, question, hint, answer, answered_correctly, answered_incorrectly, reminder, category)
VALUES (1, 'In JS how do you remove whitespace', 'for example shrek 1 ', 'console.log("shrek 1".trim)', 0, 0, now(), 'Javascript' );

INSERT INTO flashcards (user_id, question, hint, answer, answered_correctly, answered_incorrectly, reminder, category)
VALUES (2, 'In JS how do you remove whitespace', 'for example shrek 1 ', 'console.log("shrek 1".trim)', 0, 0, now(), 'Javascript' );

INSERT INTO flashcards (user_id, question, hint, answer, answered_correctly, answered_incorrectly, reminder, category)
VALUES (1, 'In JS how do you remove whitespace', 'for example shrek 1 ', 'console.log("shrek 1".trim)', 0, 0, timestamp '2030-09-28 23:00', 'Javascript' );

INSERT INTO users(username, email, password_digest) VALUES ('Bug Test', 'bug@test.com', 'BugTestPassword');

-- SELET THE flashcards due for all users
SELECT * FROM flashcards where reminder < now()

-- Update flashcards
UPDATE flashcards SET reminder = '2030-09-28 22:00' WHERE id = 2

-- NOTES:
-- Remove table data without dropping the table, better than DELETE as it resets the table auto-increment value:
TRUNCATE TABLE table_name;

