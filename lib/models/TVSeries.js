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
    this.originalNetwork = row.original_network;
    this.seasons = row.seasons;
    this.imdbRating = row.imdb_rating;
    this.rtRating = row.rt_rating;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM tv_series');
    return rows;
  }
}

module.exports = TVSeries;
