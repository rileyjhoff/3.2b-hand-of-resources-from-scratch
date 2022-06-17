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

  static async insert({ name, league, sport }) {
    const { rows } = await pool.query(
      'INSERT INTO teams (name, league, sport) VALUES ($1, $2, $3) RETURNING *',
      [name, league, sport]
    );
    return new Team(rows[0]);
  }

  static async updateById(id, updates) {
    const team = await Team.getById(id);
    if (!team) return null;
    const { name, league, sport } = { ...team, ...updates };
    const { rows } = await pool.query(
      'UPDATE teams SET name = $1, league = $2, sport = $3 WHERE id = $4 RETURNING *',
      [name, league, sport, id]
    );
    return new Team(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM teams WHERE id = $1 RETURNING *',
      [id]
    );
    return new Team(rows[0]);
  }
}

module.exports = Team;
