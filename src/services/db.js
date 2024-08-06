import initSqlJs from 'sql.js';

const initDB = async () => {
  const SQL = await initSqlJs();
  const db = new SQL.Database();
  db.run("CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY, description TEXT, priority TEXT)");
  return db;
};

export const addTodo = async (description, priority) => {
  const db = await initDB();
  db.run("INSERT INTO todos (description, priority) VALUES (?, ?)", [description, priority]);
};

export const getTodos = async () => {
  const db = await initDB();
  const res = db.exec("SELECT * FROM todos");
  return res[0] ? res[0].values : [];
};

export const updateTodo = async (id, description, priority) => {
  const db = await initDB();
  db.run("UPDATE todos SET description = ?, priority = ? WHERE id = ?", [description, priority, id]);
};

export const deleteTodo = async (id) => {
  const db = await initDB();
  db.run("DELETE FROM todos WHERE id = ?", [id]);
};
