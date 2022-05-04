let nombre: string;
let nprac: number;
let nprob: number;
let nteor: number;
let nota: number;

nombre = prompt("Ingrese el nombre del alumno");
while (nombre != "") {
  nprac = Number(prompt("Nota práctica"));
  nprob = Number(prompt("Nota de problemas"));
  nteor = Number(prompt("Nota teórica"));
  if (
    nprac >= 0 &&
    nprac <= 10 &&
    nprob >= 0 &&
    nprob <= 10 &&
    nteor >= 0 &&
    nteor <= 10
  ) {
    nprac = nprac * 0.1;
    nprob = nprob * 0.5;
    nteor = nteor * 0.4;
    nota = nprac + nprob + nteor;
    console.log("Alumno: " + nombre + ", nota: " + nota);
  } else {
    console.log("ERROR: Nota incorrecta");
  }
  nombre = prompt("Ingrese el nombre del alumno");
}
