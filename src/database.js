import initSqlJs from 'sql.js';
import { openDB } from 'idb';

const initDatabase = async () => {
  const SQL = await initSqlJs();
  
  // Open (or create) the database
  const db = new SQL.Database();

  // Create tables
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY,
    task TEXT,
    completed INTEGER,
    importance TEXT
  )`);

  return db;
};

const addUser = async (db, username, password) => {
  const stmt = db.prepare(`INSERT INTO users (username, password) VALUES (?, ?)`);
  stmt.run([username, password]);
  stmt.free();
};

const getUser = async (db, username, password) => {
  const stmt = db.prepare(`SELECT * FROM users WHERE username = ? AND password = ?`);
  stmt.bind([username, password]);
  const result = [];
  while (stmt.step()) {
    result.push(stmt.getAsObject());
  }
  stmt.free();
  return result.length > 0 ? result[0] : null;
};

const addTodo = async (db, task) => {
  const stmt = db.prepare(`INSERT INTO todos (task, completed, importance) VALUES (?, 0, '')`);
  stmt.run([task]);
  stmt.free();
};

const getTodos = async (db) => {
  const stmt = db.prepare(`SELECT * FROM todos`);
  const result = [];
  while (stmt.step()) {
    result.push(stmt.getAsObject());
  }
  stmt.free();
  return result;
};

const updateTodo = async (db, id, completed) => {
  const stmt = db.prepare(`UPDATE todos SET completed = ? WHERE id = ?`);
  stmt.run([completed, id]);
  stmt.free();
};

const deleteTodo = async (db, id) => {
  const stmt = db.prepare(`DELETE FROM todos WHERE id = ?`);
  stmt.run([id]);
  stmt.free();
};

const updateImportance = async (db, id, importance) => {
  const stmt = db.prepare(`UPDATE todos SET importance = ? WHERE id = ?`);
  stmt.run([importance, id]);
  stmt.free();
};

export {
  initDatabase,
  addUser,
  getUser,
  addTodo,
  getTodos,
  updateTodo,
  deleteTodo,
  updateImportance
};
