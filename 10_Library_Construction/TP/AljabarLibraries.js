const AljabarLibraries = {
  // A. Mencari akar-akar dari persamaan kuadrat: ax² + bx + c = 0
  AkarPersamaanKuadrat: function (persamaan) {
    const [a, b, c] = persamaan;
    const D = b * b - 4 * a * c; // diskriminan

    if (D < 0) {
      return []; // Tidak punya akar real
    }

    const akar1 = (-b + Math.sqrt(D)) / (2 * a);
    const akar2 = (-b - Math.sqrt(D)) / (2 * a);
    return [akar1, akar2];
  },

  // B. Mendapatkan hasil kuadrat dari persamaan linear: (ax + b)^2
  HasilKuadrat: function (persamaan) {
    const [a, b] = persamaan;

    const a2 = a * a;           // a²
    const ab2 = 2 * a * b;      // 2ab
    const b2 = b * b;           // b²

    return [a2, ab2 * -1, b2];
  }
};

module.exports = AljabarLibraries;
