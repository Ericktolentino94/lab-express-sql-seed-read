DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    album TEXT NOT NULL,
    time TEXT NOT NULL,
    is_favorite BOOLEAN
);