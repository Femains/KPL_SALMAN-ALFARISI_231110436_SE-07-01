// MatematikaLibraries.js

function FPB(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

function KPK(a, b) {
  return Math.abs(a * b) / FPB(a, b);
}

function Turunan(persamaan) {
  let hasil = [];
  let pangkat = persamaan.length - 1;

  for (let i = 0; i < persamaan.length - 1; i++) {
    let koef = persamaan[i] * pangkat;
    if (koef === 0) {
      pangkat--;
      continue;
    }
    let xPart = pangkat - 1 > 0 ? `x${pangkat - 1}` : pangkat - 1 === 0 ? "x" : "";
    hasil.push(`${koef >= 0 && i !== 0 ? "+" : ""}${koef}${xPart}`);
    pangkat--;
  }

  return hasil.join("");
}

function Integral(persamaan) {
  let hasil = [];
  let pangkat = persamaan.length;

  for (let i = 0; i < persamaan.length; i++) {
    let newPangkat = pangkat - i;
    let koef = persamaan[i] / newPangkat;
    let formatKoef = koef === 1 ? "" : koef === -1 ? "-" : koef;
    hasil.push(`${koef >= 0 && i !== 0 ? "+" : ""}${formatKoef}x${newPangkat}`);
  }

  hasil.push("+C");
  return hasil.join("");
}

// Export sebagai object
module.exports = {
  FPB,
  KPK,
  Turunan,
  Integral
};
