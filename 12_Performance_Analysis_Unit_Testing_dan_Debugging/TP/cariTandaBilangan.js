function cariTandaBilangan(angka) {
  if (angka > 0) {
    return "Positif";
  } else if (angka < 0) {
    return "Negatif";
  } else {
    return "Nol";
  }
}

module.exports = cariTandaBilangan;
