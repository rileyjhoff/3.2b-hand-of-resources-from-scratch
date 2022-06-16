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

DROP TABLE IF EXISTS tv_series;

CREATE TABLE tv_series (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR NOT NULL,
  genre TEXT [] NOT NULL,
  original_network VARCHAR NOT NULL,
  seasons INT NOT NULL,
  imdb_rating INT NOT NULL,
  rt_rating VARCHAR NOT NULL
);

INSERT INTO tv_series (
  title, 
  genre,
  original_network,
  seasons,
  imdb_rating,
  rt_rating
  ) 
VALUES 
  ('Barry', '{"Action","Comedy","Crime"}', 'HBO', 3, 8.4, '99%'),
  ('Obi-Wan Kenobi', '{"Action","Adventure","Sci-Fi"}', 'Disney+', 1, 7.3, '84%'),
  ('Severance', '{"Drama","Mystery","Sci-Fi"}', 'Apple TV', 1, 8.7, '98%'),
  ('South Park', '{"Animation","Comedy"}', 'Comedy Central', 25, 8.7, '80%');

DROP TABLE IF EXISTS video_games;

CREATE TABLE video_games (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  genre TEXT [] NOT NULL,
  is_free BOOLEAN NOT NULL,
  active_players TEXT NOT NULL
);

INSERT INTO video_games (
  title, 
  genre,
  is_free, 
  active_players
  ) 
VALUES 
  ('FIFA 22', '{"Sports"}', false, '108,168'),
  ('APEX Legends', '{"FPS","Battle Royale"}', true, '360,428'),
  ('Lost Ark', '{"MMORPG","Action","Fantasy"}', true, '885,379'),
  ('Dota 2', '{"Multiplayer Online Battle Arena", "Strategy"}', true, '695,841');
