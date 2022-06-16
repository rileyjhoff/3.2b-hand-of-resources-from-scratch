const pool = require('../utils/pool');

class Team {
  id;
  name;
  league;
  sport;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.league = row.league;
    this.sport = row.sport;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM teams');
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM teams WHERE id = $1', [
      id,
    ]);
    return rows[0];
  }
}

module.exports = Team;
