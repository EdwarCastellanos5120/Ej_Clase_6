function randomTime() {
  return Math.floor(Math.random() * (1000 - 100) + 100);
}

function seleccionarArchivo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const archivoSeleccionado = archivo; 
      console.log('Archivo seleccionado: ' + archivoSeleccionado); // Cambio aquí: usa la variable 'archivo
      resolve(archivoSeleccionado);
    }, randomTime());
  });
}

function verificarFormato(nombreArchivo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const formatoValido = nombreArchivo.endsWith('.txt');
      console.log('Formato válido: ' + formatoValido);
      resolve(formatoValido);
    }, randomTime());
  });
}

function verificarTamaño(nombreArchivo, formatoValido) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tamañoAceptable = formatoValido && nombreArchivo.length < 20;
      resolve(tamañoAceptable);
      console.log('Tamaño aceptable: ' + tamañoAceptable);
    }, randomTime());
  });
}

function cargarArchivo(nombreArchivo, tamañoAceptable) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tamañoAceptable) {
        resolve(`El archivo ${nombreArchivo} se ha cargado exitosamente.`);
      } else {
        reject(`El archivo ${nombreArchivo} no pudo ser cargado debido a su tamaño o formato.`);
      }
    }, randomTime());
  });
}

const archivo = "archivo.txt"; 



archivo.addEventListener('click', () => {
  seleccionarArchivo()
    .then(nombreArchivo => verificarFormato(nombreArchivo))
    .then(formatoValido => verificarTamaño(formatoValido)) 
    .then(tamañoAceptable => cargarArchivo(nombreArchivo, tamañoAceptable)) 
    .then(resultado => console.log(resultado))
    .catch(error => console.error(error));
});