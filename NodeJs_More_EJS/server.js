const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil",
    },
    {
      title: "E",
      message: "JS usa JavaScript para renderizar HTML",
    },
    {
      title: "M",
      message: "uito fácil de usar",
    },
    { title: "A", message: "morzinho" },
    { title: "I", message: "nstal EJS" },
    { title: "S", message: "intaxe simples" },
  ];

  const subTitle =
    "Uma linguagem de modelagem para criação de páginas HTML utilizando JavaScript.";

  res.render("pages/index", {
    qualitys: items,
    subTitle: subTitle,
  });
});

app.get("/sobre", (req, res) => {
  res.render("pages/about");
});

app.listen(8080);
console.log("Rodando :)");
