import { DatabaseSync } from "node:sqlite";

const database = new DatabaseSync("./src/database/database.db");

database.exec(`
    CREATE TABLE IF NOT EXISTS persons (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER
    )
`);

export default database;
