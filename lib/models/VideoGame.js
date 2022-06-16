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
}

module.exports = VideoGame;
