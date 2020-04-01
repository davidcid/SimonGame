const azul = document.querySelector(".azul");
const rojo = document.querySelector(".rojo");
const verde = document.querySelector(".verde");
const amarillo = document.querySelector(".amarillo");

const sonidoAzul = document.querySelector("#sonido-azul");
const sonidoRojo = document.querySelector("#sonido-rojo");
const sonidoVerde = document.querySelector("#sonido-verde");
const sonidoAmarillo = document.querySelector("#sonido-amarillo");
const sonidoError = document.querySelector("#sonido-error");

const botones = document.querySelectorAll(".boton");

const textoFase = document.querySelector(".fase");

const mensaje = document.querySelector(".messages");

let secuencia = [];

let fase = 0;

let paso = 0;

let timeout = 1600;
let tiempoIluminado = 400;

let finJuego = 6;

botones.forEach(boton =>
  boton.addEventListener("click", () => {
    if (secuencia[paso] === boton.classList[1]) {
      botonCorrecto();
      iniciarSonido(boton);
    } else {
      botonIncorrecto();
    }
  })
);

botonCorrecto = () => {
  paso++;
  if (fase === paso - 1) {
    fase++;
    if (fase === finJuego) {
      mensaje.innerHTML = "Has ganado!";
      console.log("has ganado!");
    }
    mostrarSecuencia();
    textoFase.innerHTML = `${fase + 1}`;
  }
};

botonIncorrecto = () => {
  setTimeout(() => {
    mensaje.innerHTML = "";
  }, 3000);
  mensaje.innerHTML = "Botón equivocado! Prueba otra vez!";
  sonidoError.play();
  mostrarSecuencia();
};

const crearSecuencia = () => {
  for (let i = 0; i < 20; i++) {
    const color = Math.floor(Math.random() * 4);
    if (color === 0) {
      secuencia[i] = "azul";
    }
    if (color === 1) {
      secuencia[i] = "rojo";
    }
    if (color === 2) {
      secuencia[i] = "verde";
    }
    if (color === 3) {
      secuencia[i] = "amarillo";
    }
  }
};

inicializar = () => {
  fase = 0;
  paso = 0;
  crearSecuencia();
  mostrarSecuencia();
};

mostrarSecuencia = () => {
  paso = 0;
  setTimeout(function() {
    for (let i = 0; i <= fase; i++) {
      let color = azul;
      setTimeout(function() {
        if (secuencia[i] === "azul") {
          color = azul;
        }

        if (secuencia[i] === "rojo") {
          color = rojo;
        }

        if (secuencia[i] === "verde") {
          color = verde;
        }

        if (secuencia[i] === "amarillo") {
          color = amarillo;
        }
        activarClase(color);
      }, i * timeout);
    }
  }, timeout / 2);
};

iniciarSonido = color => {
  if (color.classList[1] === "azul") {
    sonidoAzul.play();
  }
  if (color.classList[1] === "rojo") {
    sonidoRojo.play();
  }
  if (color.classList[1] === "verde") {
    sonidoVerde.play();
  }
  if (color.classList[1] === "amarillo") {
    sonidoAmarillo.play();
  }
};

const activarClase = color => {
  color.classList.add("activo");
  iniciarSonido(color);
  setTimeout(function() {
    color.classList.remove("activo");
  }, tiempoIluminado);
};
