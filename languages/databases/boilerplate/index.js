const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
app.listen(3333, () => {
  console.log("the server was initialized");
});

//middleware
app.use(cors());
app.use(express.json);

//routes

//create something
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newtodo = await pool.query(
      "INERT INTO todo (description) values ($1) returning *",
      [description]
    );
  } catch (err) {
    console.log(err.message);
  }
});
//get all things
app.get("./todos", async (req, res) => {
  try {
    const todo = await pool.query("SELECT * FROM todo");
  } catch (err) {
    console.log(error.message);
  }
});
//get one thing
app.get("./todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id = $1", [id]);
  } catch (err) {
    console.log(err.message);
  }
});
//update only one thing
app.get("./todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const update = await pool.query(
      "UPDATE todo SET description = $1 WHERE id = $2",
      [description, id]
    );
  } catch (err) {
    console.log(err.message);
  }
});
// delete one thing
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);
  } catch (error) {
    console.error(err.message);
  }
});
