CREATE DATABASE quiz_watch;
\c quiz_watch

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username TEXT,
password_digest TEXT
);

CREATE TABLE quiz_reminders (
id SERIAL PRIMARY KEY,
user_id INT,
question TEXT,
hint TEXT,
answer TEXT,
answered_correctly INT,
answered_incorrectly INT
);

CREATE TABLE quiz_reminders (
id SERIAL PRIMARY KEY,
user_id INT,
flashcard_id INT,
one_day BOOLEAN,
1_week BOOLEAN,
2_weeks BOOLEAN,
3_weeks BOOLEAN,
4_weeks BOOLEAN
);