const url = "http://localhost:5501/api";

function getUsers() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => (renderApiResult.textContent = JSON.stringify(data)))
    .catch((error) => console.log(error));
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch((error) => console.log(error));
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.log(error));
}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.log(error));
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json; charset=utf-8" },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.log(error));
}

const newUser = {
  name: "Miguel Moreira",
  avatar: "https://picsum.photos/200/300",
  city: "São Paulo",
};
// addUser(newUser);

const updatedUser = {
  name: "Allison Ferreira",
  avatar: "https://avatars.githubusercontent.com/u/53721947?v=4",
  city: "Guaianases",
};
updateUser(updatedUser, 10);

deleteUser(16);
getUsers();
getUser(10);
