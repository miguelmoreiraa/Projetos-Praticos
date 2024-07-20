// peso/(altura x altura)

const peso = 1;
const altura = 1.73;
const calcIMC = 29.9;

function teste() {
  if (calcIMC < 18.5) {
    console.log("Baixo peso");
  } else if (calcIMC >= 18.5 && calcIMC <= 24.9) {
    console.log("Peso normal");
  } else if (calcIMC >= 25 && calcIMC <= 29.9) {
    console.log("Sobrepeso");
  } else if (calcIMC >= 30 && calcIMC <= 34.9) {
    console.log("Obesidade grau I");
  } else if (calcIMC >= 35 && calcIMC <= 39.9) {
    console.log("Obesidade grau II");
  } else {
    console.log("Obesidade grau III");
  }
}

teste();
