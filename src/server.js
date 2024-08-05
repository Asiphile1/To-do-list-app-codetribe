const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database(':memory:');


db.serialize(() => {
  db.run("CREATE TABLE todos (id INTEGER PRIMARY KEY, task TEXT, completed BOOLEAN, importance TEXT)");
});


app.get('/todos', (req, res) => {
  db.all("SELECT * FROM todos", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});


app.post('/todos', (req, res) => {
  const { task, completed, importance } = req.body;
  const sql = "INSERT INTO todos (task, completed, importance) VALUES (?, ?, ?)";
  db.run(sql, [task, completed, importance], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, task, completed, importance });
  });
});


app.delete('/todos/:id', (req, res) => {
  const sql = "DELETE FROM todos WHERE id = ?";
  db.run(sql, req.params.id, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ deletedID: req.params.id });
  });
});


app.put('/todos/:id', (req, res) => {
  const { task, completed, importance } = req.body;
  const sql = "UPDATE todos SET task = ?, completed = ?, importance = ? WHERE id = ?";
  db.run(sql, [task, completed, importance, req.params.id], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: req.params.id, task, completed, importance });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


