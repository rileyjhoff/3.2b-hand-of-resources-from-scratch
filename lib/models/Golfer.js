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
    return rows.map((row) => new Golfer(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM golfers WHERE id = $1', [
      id,
    ]);
    return rows.map((row) => new Golfer(row));
  }
}

module.exports = Golfer;
