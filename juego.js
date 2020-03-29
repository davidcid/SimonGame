const azul = document.querySelector(".azul");
const rojo = document.querySelector(".rojo");
const verde = document.querySelector(".verde");
const amarillo = document.querySelector(".amarillo");

const botones = document.querySelectorAll(".boton");

let secuencia = [];

let fase = 0;

let paso = 0;

let timeout = 2000;
let tiempoIluminado = 400;

let finJuego = 6;

botones.forEach(boton =>
  boton.addEventListener("click", () => {
    console.log(boton.classList[1]);
  })
);

botonCorrecto = () => {
  paso++;
  if (fase === paso - 1) {
    fase++;
    if (fase === finJuego) {
      console.log("has ganado!");
    }
    mostrarSecuencia();
    console.log(`fase: ${fase}`);
  }
};

botonIncorrecto = () => {
  console.log("error! prueba otra vez");
  mostrarSecuencia();
};

// azul.addEventListener("click", () => {
//   if (secuencia[paso] === 0) {
//     botonCorrecto();
//   } else {
//     botonIncorrecto();
//   }
// });

// rojo.addEventListener("click", () => {
//   if (secuencia[paso] === 1) {
//     botonCorrecto();
//   } else {
//     botonIncorrecto();
//   }
// });

// verde.addEventListener("click", () => {
//   if (secuencia[paso] === 2) {
//     botonCorrecto();
//   } else {
//     botonIncorrecto();
//   }
// });

// amarillo.addEventListener("click", () => {
//   if (secuencia[paso] === 3) {
//     botonCorrecto();
//   } else {
//     botonIncorrecto();
//   }
// });

const crearSecuencia = () => {
  for (let i = 0; i < 20; i++) {
    const color = Math.floor(Math.random() * 4);
    if (color === 0) {
      secuencia[i] = "azul";
    }
    if (color === 0) {
      secuencia[i] = "rojo";
    }
    if (color === 0) {
      secuencia[i] = "verde";
    }
    if (color === 0) {
      secuencia[i] = "amarillo";
    }
  }
};

crearSecuencia();

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

const activarClase = color => {
  color.classList.add("activo");
  setTimeout(function() {
    color.classList.remove("activo");
  }, tiempoIluminado);
};

mostrarSecuencia();
