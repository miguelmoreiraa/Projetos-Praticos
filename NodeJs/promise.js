/**
    Promise
    A promessa de que algo irá acontecer 
    Poderá dar certo ou errado,
    mas irá acontecer
 */
let aceitar = true;
console.log("Pedir uber");

const promessa = new Promise((resolve, reject) => {
  if (aceitar) {
    return resolve("Pedido aceito");
  }
  return reject("Pedido negado");
});

console.log("aguardando");
promessa
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("Finalizada"));

const promess = new Promise(function (resolve, reject) {
  return resolve("Deu bom!!!");
});

async function start() {
  try {
    const result = await promess;
    console.log(result);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("rodar sempre");
  }
}

start();
