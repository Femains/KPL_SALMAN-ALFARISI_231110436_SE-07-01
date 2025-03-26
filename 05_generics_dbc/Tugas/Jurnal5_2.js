class Penjumlahan {
    jumlahTigaAngka(a, b, c, d, e) {
      return Number(a) + Number(b) + Number(c) + Number(d) + Number(e);
    }
  }

  class SimpleDataBase {
    constructor() {
      this.storedData = [];
      this.inputDates = [];
    }
  
    addNewData(data) {
      this.storedData.push(data);
      this.inputDates.push(new Date().toISOString());
    }
  
    printAllData() {
      this.storedData.forEach((data, index) => {
        console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index]}`);
      });
    }
  }
  
  
const database = new SimpleDataBase();
database.addNewData(23);
database.addNewData(11);
database.addNewData(10);
database.addNewData(40);
database.addNewData(36);
database.printAllData();
    
console.log("-------------------")
const angka1 = 23;
const angka2 = 11;
const angka3 = 10;
const angka4 = 40;
const angka5 = 36;
  
const penjumlahan = new Penjumlahan();
console.log(`Hasil penjumlahan: ${penjumlahan.jumlahTigaAngka(angka1, angka2, angka3, angka4, angka5)}`);
  