class Penjumlahan {
    jumlahTigaAngka(a, b, c, d, e) {
      return Number(a) + Number(b) + Number(c) + Number(d) + Number(e);
    }
  }
  
  
const angka1 = 23;
const angka2 = 11;
const angka3 = 10;
const angka4 = 40;
const angka5 = 36;
  
  const penjumlahan = new Penjumlahan();
  console.log(`Hasil penjumlahan: ${penjumlahan.jumlahTigaAngka(angka1, angka2, angka3, angka4, angka5)}`);
  