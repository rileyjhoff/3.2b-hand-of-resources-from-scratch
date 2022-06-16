-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP TABLE IF EXISTS golfers;

CREATE TABLE golfers (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  ranking INT NOT NULL,
  wins INT NOT NULL,
  age INT NOT NULL
);

INSERT INTO golfers (
  name, 
  ranking,
  wins, 
  age
  ) 
VALUES 
  ('Will Zalatoris', 14, 1, 25),
  ('Sam Burns', 9, 5, 25),
  ('Max Homa', 23, 6, 31),
  ('Brooks Koepka', 19, 15, 32),
  ('Davis Riley', 85, 2, 25);

DROP TABLE IF EXISTS teams;

CREATE TABLE teams (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR NOT NULL,
  league VARCHAR NOT NULL,
  sport VARCHAR NOT NULL
);

INSERT INTO teams (
  name, 
  league,
  sport
  ) 
VALUES 
  ('Portland Trail Blazers', 'NBA', 'basketball'),
  ('Colorado Avalanche', 'NHL', 'hockey'),
  ('Portland Timbers', 'MLS', 'soccer'),
  ('Chelsea FC', 'EPL', 'soccer');