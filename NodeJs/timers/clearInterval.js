// clearInterval irá cancelar um setInterval registrado.

const timeOut = 1000;
const cheking = () => console.log("cheking!");

let interval = setInterval(cheking, timeOut);

setTimeout(() => clearInterval(interval), 3000);
