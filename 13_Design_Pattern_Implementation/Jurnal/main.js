// file: main.js
const PusatDataSingleton = require('./PusatDataSingleton');

// A. Buat dua variable
const data1 = PusatDataSingleton.GetDataSingleton();
const data2 = PusatDataSingleton.GetDataSingleton();

// B. Tambahkan data di data1
data1.AddSebuahData("Mahasiswa A");
data1.AddSebuahData("Mahasiswa B");
data1.AddSebuahData("Asisten Praktikum");

// C. Print data2
console.log("== Data2 Sebelum Penghapusan ==");
data2.PrintSemuaData();

// D. Hapus nama asisten dari data2
data2.HapusSebuahData(2);

// E. Print data1 untuk pastikan asisten hilang
console.log("\n== Data1 Setelah Penghapusan ==");
data1.PrintSemuaData();

// F. Print jumlah elemen pada data1 dan data2
console.log("\nJumlah data:");
console.log(`data1: ${data1.GetSemuaData().length}`);
console.log(`data2: ${data2.GetSemuaData().length}`);
