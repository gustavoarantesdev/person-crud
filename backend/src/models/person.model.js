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

export function insert() {
  //
}

export function update() {
  //
}

export function destroy() {
  //
}
