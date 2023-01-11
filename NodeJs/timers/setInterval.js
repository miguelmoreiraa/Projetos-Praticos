// setInterval irá rodar uma função N vezes
// depois de X milisegundos

const timeOut = 1000;
const cheking = () => console.log("cheking!");

setInterval(cheking, timeOut);
