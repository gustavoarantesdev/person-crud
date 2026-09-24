import database from "../database/connection.js";

export function findAll() {
  const stmt = database.prepare(`
        SELECT *
        FROM persons
        `);

  return stmt.all();
}

export function findById(id) {
  //
}

export function insert(data) {
  const { name, age } = data;

  const stmt = database.prepare(`
        INSERT INTO persons (name, age) 
        VALUES (?, ?)
    `);

  return stmt.run(name, age);
}

export function update() {
  //
}

export function destroy() {
  //
}
