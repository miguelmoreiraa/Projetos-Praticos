const url = "http://localhost:5501/api"

function getUsers() {
  axios
    .get(url)
    .then((response) => {
      // Antes eu tinha colocado response.data direto, e isso fez que no HTML...
      // Mostrasse [Object object] pois o HTML não entendi JS...
      // Com isso passando o JSON.stringify o obj é exibido.
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch((error) => console.log(error))
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then((response) => {
      const data = response.data
      apiResultParams.textContent = JSON.stringify(data)
      userName.textContent = data.name
      userCity.textContent = data.city
      userID.textContent = data.id
      userAvatar.src = data.avatar
    })
    .catch((error) => console.log(error))
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
}

const newUser = {
  name: "Miguel Moreira",
  avatar: "https://picsum.photos/200/300",
  city: "São Paulo",
}

function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
}

const userUpdated = {
  name: "Allison Ferreira",
  avatar: "https://avatars.githubusercontent.com/u/53721947?v=4",
  city: "Mato Grosso",
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
}

getUsers()
getUser(3)
deleteUser(2)

// updateUser(3, userUpdated)
// addNewUser()
