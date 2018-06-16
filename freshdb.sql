DROP DATABASE IF EXISTS birthdayteroid;
DROP DATABASE IF EXISTS birthdayasteroid;
DROP DATABASE IF EXISTS entries;

CREATE DATABASE entries;

\c entries;

CREATE TABLE entry (
	id SERIAL PRIMARY KEY,
	birthday DATE,
	mobile VARCHAR(15) UNIQUE,
	sender_email VARCHAR(320)
);