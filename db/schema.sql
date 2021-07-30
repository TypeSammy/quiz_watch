CREATE DATABASE quiz_watch;
\c quiz_watch

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username TEXT,
password_digest TEXT
);

CREATE TABLE flashcards (
id SERIAL PRIMARY KEY,
user_id INT,
question TEXT,
hint TEXT,
answer TEXT,
reminder TIMESTAMP
);

-- NOTES:
-- Remove table data without dropping the table, better than DELETE as it resets the table auto-increment value:
TRUNCATE TABLE table_name;

