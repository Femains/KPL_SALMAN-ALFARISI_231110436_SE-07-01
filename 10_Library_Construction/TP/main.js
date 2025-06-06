const Aljabar = require('./AljabarLibraries');

function main() {
  // Akar dari x² - 3x - 10
  const akar = Aljabar.AkarPersamaanKuadrat([1, -3, -10]);
  console.log("Akar persamaan kuadrat x² - 3x - 10:", akar); // Output: [5, -2]

  // Hasil kuadrat dari (2x - 3)^2
  const kuadrat = Aljabar.HasilKuadrat([2, -3]);
  console.log("Hasil kuadrat dari (2x - 3)^2:", kuadrat); // Output: [4, -12, 9]
}

main();
