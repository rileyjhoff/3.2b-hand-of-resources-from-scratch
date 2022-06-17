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

  static async insert({ name, age, type }) {
    const { rows } = await pool.query(
      'INSERT INTO pets (name, age, type) VALUES ($1, $2, $3) RETURNING *',
      [name, age, type]
    );
    return new Pet(rows[0]);
  }

  static async updateById(id, updates) {
    const pet = await Pet.getById(id);
    if (!pet) return null;
    const { name, age, type } = { ...pet, ...updates };
    const { rows } = await pool.query(
      'UPDATE pets SET name = $1, age = $2, type = $3 WHERE id = $4 RETURNING *',
      [name, age, type, id]
    );
    return new Pet(rows[0]);
  }
}

module.exports = Pet;
