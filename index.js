const express = require("express")

const app = express()


app.get("/", async (req, res) => {
  const { name } = req.query

  return res.send(`
  <h1>Full Cycle Rocks!</h1>
  <p>Para add seu nome na lista, passe o query params na request: name=seunome<p>
  <br/> <ul>${name}<ul>`);
});

app.listen(3333)