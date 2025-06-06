/**
 * Fungsi untuk memeriksa apakah bilangan genap atau ganjil.
 * @param {number} angka - Bilangan yang ingin dicek.
 */
function cekGenapGanjil(angka) {
  if (angka % 2 === 0) {
    console.log("Genap");
  } else {
    console.log("Ganjil");
  }
}

// Contoh pemanggilan fungsi
const nilai = 7;
cekGenapGanjil(nilai);
