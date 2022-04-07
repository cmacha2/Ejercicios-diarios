function toDayOfYear(arr) {
  // return a number
  
var fechaInicio = new Date(`${arr[2]}-1-1`).getTime();
var fechaFin    = new Date(`${arr[2]}-${arr[1]}-${arr[0]}`).getTime();

var solucion = Math.ceil((fechaFin - fechaInicio) / 86400000);

  return arr[2] % 4 === 0 ? solucion+1 : solucion+1
}