import * as SQLite from 'expo-sqlite';

let db;

async function initDatabase() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('best_online_store.db');
  }
  return db;
}

export { initDatabase };