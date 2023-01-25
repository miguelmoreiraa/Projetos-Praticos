const express = require("express");
const axios = require("axios");
const app = express();
const port = "3000";
app.listen(port);

app.route("/").get((req, res) => {
  axios
    .get("https://api.github.com/users/miguelmoreiraa")
    .then((result) => res.send(`<img src='${result.data.avatar_url}'/>`))
    .catch((err) => console.log(err));
});
