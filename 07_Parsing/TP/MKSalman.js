const fs = require('fs');

class MKSalman {
  constructor(matakuliah) {
    this.matakuliah = matakuliah;
  }

  static ReadJSON(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      const obj = JSON.parse(data);

      const mahasiswa = new MKSalman(obj.matakuliah);

      console.log("Daftar mata kuliah yang diambil:");
      mahasiswa.matakuliah.forEach((mk, index) => {
        console.log(`MK ${index + 1} ${mk.kode} - ${mk.nama}`);
      });
    } catch (err) {
      console.error("Gagal membaca atau parse JSON:", err.message);
    }
  }
}


MKSalman.ReadJSON('./tp7_2_2311104036.json');
