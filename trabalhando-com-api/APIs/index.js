const express = require("express");
const app = express();
const port = "3000";
app.listen(port); // listen um método que fica ouvindo as coisas
// code acima criando os server.

//middleware

app.use(express.json());

app.route("/").get((req, res) => {
  res.send("Hello World!"); // send = enviar
});

app.route("/sobre").get((req, res) => {
  res.send("Hello Sobre!"); // send = enviar
});

app.route("/").post((req, res) => {
  res.send(req.body);
});

let author = "Miguel Moreira";

app.route("/author").get((req, res) => res.send(author));

app.route("/").put((req, res) => {
  author = req.body.author;
  res.send(author);
});

app.route("/:id").delete((req, res) => {
  res.send(req.params.id);
});
