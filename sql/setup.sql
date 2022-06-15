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