// main.js
const MatematikaLibraries = require('./MatematikaLibraries');

function main() {
  const fpb = MatematikaLibraries.FPB(60, 45);
  console.log(`FPB(60, 45) = ${fpb}`); // 15

  const kpk = MatematikaLibraries.KPK(12, 8);
  console.log(`KPK(12, 8) = ${kpk}`); // 24

  const turunan = MatematikaLibraries.Turunan([1, 4, -12, 9]);
  console.log(`Turunan([1,4,-12,9]) = ${turunan}`); // "3x2+8x-12"

  const integral = MatematikaLibraries.Integral([4, 6, -12, 9]);
  console.log(`Integral([4,6,-12,9]) = ${integral}`); // "x4+2x3-6x2+9x+C"
}

main();
