const fs = require('fs');

class tpDataSalman {
  constructor(namaDepan, namaBelakang, nim, fakultas) {
    this.namaDepan = namaDepan;
    this.namaBelakang = namaBelakang;
    this.nim = nim;
    this.fakultas = fakultas;
  }

  static ReadJSON(filePath) {
    try {
      const data = fs.readFileSync(filePath, 'utf-8');
      const obj = JSON.parse(data);

      const mhs = new tpDataSalman(
        obj.nama_depan,
        obj.nama_belakang,
        obj.nim,
        obj.fakultas
      );

      console.log(`Nama ${mhs.namaDepan} ${mhs.namaBelakang} dengan nim ${mhs.nim} dari fakultas ${mhs.fakultas}`);
    } catch (error) {
      console.error("Gagal membaca atau parse file JSON:", error.message);
    }
  }
}


tpDataSalman.ReadJSON('./tp7_1_2311104036.json');
