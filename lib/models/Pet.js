const pool = require('../utils/pool');

class Pet {
  id;
  name;
  age;
  type;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.age = row.age;
    this.type = row.type;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM pets');
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM pets WHERE id = $1', [id]);
    return rows[0];
  }
}

module.exports = Pet;
