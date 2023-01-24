async function start() {
  const response = await fetch("https://api.github.com/users/miguelmoreiraa");
  const user = await response.json();
  const reposResponse = await fetch(user.repos_url);
  const repos = await reposResponse.json();
  console.log(repos);
}

start().catch((err) => console.log(err));
