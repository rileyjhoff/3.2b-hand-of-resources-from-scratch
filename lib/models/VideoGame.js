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
}

module.exports = VideoGame;
