import database from "../database/connection.js";

export function findAll() {
  const stmt = database.prepare(`
        SELECT *
        FROM persons
        `);

  return stmt.all();
}
