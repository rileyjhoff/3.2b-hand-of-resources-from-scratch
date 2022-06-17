const pool = require('../utils/pool');

class Golfer {
  id;
  name;
  ranking;
  wins;
  age;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.ranking = row.ranking;
    this.wins = row.wins;
    this.age = row.age;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM golfers');
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM golfers WHERE id = $1', [
      id,
    ]);
    return rows[0];
  }

  static async insert({ name, ranking, wins, age }) {
    const { rows } = await pool.query(
      'INSERT INTO golfers (name, ranking, wins, age) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, ranking, wins, age]
    );
    return new Golfer(rows[0]);
  }

  static async updateById(id, updates) {
    const golfer = await Golfer.getById(id);
    if (!golfer) return null;
    const { name, ranking, wins, age } = { ...golfer, ...updates };
    const { rows } = await pool.query(
      'UPDATE golfers SET name = $1, ranking = $2, wins = $3, age = $4 WHERE id = $5 RETURNING *',
      [name, ranking, wins, age, id]
    );
    return new Golfer(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(
      'DELETE FROM golfers WHERE id = $1 RETURNING *',
      [id]
    );
    return new Golfer(rows[0]);
  }
}

module.exports = Golfer;
