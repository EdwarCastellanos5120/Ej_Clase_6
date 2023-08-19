let file = document.getElementById("archivo");

const simulateFile = "archivo.txt";

//Primer Punto
function randomTime() {
  return Math.floor(Math.random() * (1000 - 100) + 100);
}

function seleccionarArchivo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Archivo seleccionado");
    }, randomTime());
  });
}

file.addEventListener("click", () => {
  seleccionarArchivo().then((result) => {
    console.log(result);
  });
});
//Primer Punto

//Creame una funcion que valide si el archivo es .txt
function verificarFormato() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Archivo validado");
    }, randomTime());
  });
}
