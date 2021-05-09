const express = require("express")
const mysql = require('mysql2/promise');

const app = express()


app.get("/", async (req, res) => {
  const { name } = req.query
  const connection = await mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'teste',
    database: 'node'
  });
  await connection.connect()

  await connection.query(`INSERT INTO people(name) VALUES ("${name}")`);

  const [users] = await connection.query("SELECT * FROM people");
  const usersParse = users.map(user => `<li>${user.name}<li>`).toString().split(',').join('')

  connection.end();
  return res.send(`
  <h1>Full Cycle Rocks!</h1>
  <p>Para add seu nome na lista acesse http://localhost:8080/?name=seunome<p>
  <br/> <ul>${usersParse}<ul>`);
});

app.listen(3333)