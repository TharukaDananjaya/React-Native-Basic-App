import { initDatabase } from "./database";


async function createUsersTable() {
  const db = await initDatabase();
  try {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
      );`);
    console.log('Users table created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  }
}

// async function createProductsTable() {
//   const db = await initDatabase();
//   try {
//     await db.execAsync(
//       `CREATE TABLE IF NOT EXISTS products (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         name TEXT NOT NULL,
//         description TEXT,
//         price REAL NOT NULL,
//         stock INTEGER NOT NULL DEFAULT 0
//       );`);
//     console.log('Products table created successfully');
//   } catch (error) {
//     console.error('Error creating table:', error);
//   }
// }

export { createUsersTable };