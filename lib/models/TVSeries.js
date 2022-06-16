const pool = require('../utils/pool');

class TVSeries {
  id;
  name;
  genre;
  original_network;
  seasons;
  imdb_rating;
  rt_rating;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.genre = row.genre;
    this.original_network = row.original_network;
    this.seasons = row.seasons;
    this.imdb_rating = row.imdb_rating;
    this.rt_rating = row.rt_rating;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM tv_series');
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM tv_series WHERE id = $1', [
      id,
    ]);
    return rows[0];
  }
}

module.exports = TVSeries;
