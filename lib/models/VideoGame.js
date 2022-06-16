const pool = require('../utils/pool');

class VideoGame {
  id;
  title;
  genre;
  is_free;
  active_players;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.genre = row.genre;
    this.is_free = row.is_free;
    this.active_players = row.active_players;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM video_games');
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM video_games WHERE id = $1',
      [id]
    );
    return rows[0];
  }

  static async insert({ title, genre, is_free, active_players }) {
    const { rows } = await pool.query(
      'INSERT INTO video_games (title, genre, is_free, active_players) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, genre, is_free, active_players]
    );
    return new VideoGame(rows[0]);
  }
}

module.exports = VideoGame;
