const pool = require('../utils/pool');

class TVSeries {
  id;
  title;
  genre;
  original_network;
  seasons;
  imdb_rating;
  rt_rating;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
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

  static async insert({
    title,
    genre,
    original_network,
    seasons,
    imdb_rating,
    rt_rating,
  }) {
    const { rows } = await pool.query(
      'INSERT INTO tv_series (title, genre, original_network, seasons, imdb_rating, rt_rating) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, genre, original_network, seasons, imdb_rating, rt_rating]
    );
    return new TVSeries(rows[0]);
  }

  static async updateById(id, updates) {
    const tvSeries = await TVSeries.getById(id);
    if (!tvSeries) return null;
    const { title, genre, original_network, seasons, imdb_rating, rt_rating } =
      { ...tvSeries, ...updates };
    const { rows } = await pool.query(
      'UPDATE tv_series SET title = $1, genre = $2, original_network = $3, seasons = $4, imdb_rating = $5, rt_rating = $6 WHERE id = $7 RETURNING *',
      [title, genre, original_network, seasons, imdb_rating, rt_rating, id]
    );
    return new TVSeries(rows[0]);
  }
}

module.exports = TVSeries;
