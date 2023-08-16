const asignatura = [
  "Calculo",
  "Electronica",
  "Control",
  "Fisica",
  "Programacion",
  "Ingles",
];
const Matricula = [
  "Alexander",
  "Dariel",
  "Alain",
  "Emilio",
  "Betty",
  "Roxana",
  "Ruben",
  "Lesnier",
  "Hermes",
  "Lisbeth",
  "David",
  "Fernando",
  "Rigo",
  "Ricardo",
  "Fortun",
  "Luis",
  "Guillermo",
  "Alejandro",
];
const Asigns = document.getElementById("Asignaturas");
const Alumns = document.getElementById("Alumnos");

const Registro = new Map();
const Historico = new Map();

for (let est of Matricula.sort()) {
  const estado = new Map();
  for (let asg of asignatura) {
    const materia = new Map();
    materia.set("asistencia", 0);
    materia.set("checked", false);
    estado.set(asg, materia);
    Registro.set(est, estado);
  }
}
for (let asg of asignatura) {
  const materia = new Map();
  materia.set("asistencia", 0);
  materia.set("checked", false);
  Historico.set(asg, materia);
}

let dias = 1;

const Registrar = (estudiante, asignatura) => {
  console.log(
    `se va a registar al estudiante ${estudiante} en la asignatura ${asignatura}`
  );
  if (!Registro.get(estudiante).get(asignatura).get("checked")) {
    Registro.get(estudiante)
      .get(asignatura)
      .set(
        "asistencia",
        Registro.get(estudiante).get(asignatura).get("asistencia") + 1
      );
    Registro.get(estudiante).get(asignatura).set("checked", true);
  } else {
    alert("El estudiante ya ha sido registrado");
  }

  if (!Historico.get(asignatura).get("checked")) {
    Historico.get(asignatura).set(
      "asistencia",
      Historico.get(asignatura).get("asistencia") + 1
    );
    Historico.get(asignatura).set("checked", true);
  }
};

const Asistencia = () => {
  alert(`Hoy es el dia ${dias + 1}`);

  let asignaturaContador = 0;
  let asignatura;

  let estudiantes = [];
  let alumno;

  while (asignaturaContador < 7) {
    asignatura = prompt(
      "Inserte la asignatura a cursar, inserte -1 para finalizar"
    );
    if (asignatura === "-1") {
      break;
    }
    asignaturaContador++;
    while (estudiantes.length < 19) {
      alumno = prompt(
        "Inserte el nombre del estudiante, inserte -1 para finalizar"
      );
      if (alumno === "-1") {
        break;
      }
      estudiantes.push;
      Registrar(alumno, asignatura);
    }
  }

  dias++;
};

for (let alumnos of Matricula.sort()) {
  const fila = document.createElement("tr");
  const alumno = document.createElement("td");

  alumno.innerText = alumnos;
  fila.appendChild(alumno);
  const tabla = document.getElementById("tbody");
  tabla.appendChild(fila);
  for (let materia of asignatura) {
    const asign = document.createElement("td");
    asign.innerHTML = 0;
    asign.id = `${alumnos} ${materia}`;
    fila.appendChild(asign);
  }
}

const crearFormulario = (arreglo, contenedor, name) => {
  for (let elemento of arreglo) {
    const asign = document.createElement("input");
    const asignName = document.createElement("label");
    const saltoDeLinea = document.createElement("br");

    asign.type = "radio";
    asign.id = elemento;
    asign.name = name;

    asignName.for = elemento;
    asignName.innerHTML = elemento;

    contenedor.appendChild(asign);
    contenedor.append(asignName);
    contenedor.appendChild(saltoDeLinea);
  }
};
const Seleccionar = (grupo) => {
  let radios = document.getElementsByName(grupo);
  for (let radio of radios) {
    if (radio.checked) {
      return radio.id;
    }
  }
};

crearFormulario(Matricula.sort(), Alumns, "alumno");
crearFormulario(asignatura, Asigns, "materia");

const form = document.getElementById("formulario");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let estudiante = Seleccionar("alumno");
  let asignatura = Seleccionar("materia");

  Registrar(estudiante, asignatura);
});

const cerrarDia = document.getElementById("dia");
cerrarDia.addEventListener("click", () => {
  alert(`fin del dia ${dias}`);
  dias++;
  Registro.forEach((state, student) => {
    state.forEach((subject, asignatura) => {
      const valor = document.getElementById(`${student} ${asignatura}`);
      let asistencia = Registro.get(student).get(asignatura).get("asistencia");
      let frecuencia = Historico.get(asignatura).get("asistencia");
      valor.innerHTML =
        (Historico.get(asignatura).get("asistencia") !== 0
          ? ((asistencia / frecuencia) * 100).toFixed(2) + "%"
          : 0);
      if (((asistencia / frecuencia) * 100)<90){
        valor.style.color='red'
      } 
      subject.set("checked", false);
      Historico.get(asignatura).set("checked", false);
    });
  });
});
