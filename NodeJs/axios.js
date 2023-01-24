import axios from "axios";

axios
  .get("https://api.github.com/users/miguelmoreiraa")
  .then((response) => axios.get(response.data.repos_url))
  .then((repos) => console.log(repos.data))
  .catch((error) => console.log(error));

Promise.all([
  axios.get("https://api.github.com/users/miguelmoreiraa"),
  axios.get("https://api.github.com/users/miguelmoreiraa/repos"),
])
  .then((responses) => {
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
  })
  .catch((err) => console.log(err.message));
