// Import module filesystem
const fs = require('fs');

class SalmanAlfarisi2311104036 {
  constructor(nama, nim, kelas, angkatan, hobi) {
    this.nama = nama;
    this.nim = nim;
    this.kelas = kelas;
    this.angkatan = angkatan;
    this.hobi = hobi;
  }

  static ReadJSON(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      const obj = JSON.parse(data);

      const mahasiswa = new SalmanAlfarisi2311104036(
        obj.nama,
        obj.nim,
        obj.kelas,
        obj.angkatan,
        obj.hobi
      );

      // Output hasil deserialisasi
      console.log("===== DATA MAHASISWA =====");
      console.log(`Nama     : ${mahasiswa.nama}`);
      console.log(`NIM      : ${mahasiswa.nim}`);
      console.log(`Kelas    : ${mahasiswa.kelas}`);
      console.log(`Angkatan : ${mahasiswa.angkatan}`);
      console.log(`Hobi     : ${mahasiswa.hobi.join(', ')}`);
    } catch (error) {
      console.error("Gagal membaca atau parse file JSON:", error.message);
    }
  }
}

SalmanAlfarisi2311104036.ReadJSON('./jurnal7_1_2311104036.json');
