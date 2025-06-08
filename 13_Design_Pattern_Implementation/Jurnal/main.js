
const PusatDataSingleton = require('./PusatDataSingleton');

const data1 = PusatDataSingleton.GetDataSingleton();
const data2 = PusatDataSingleton.GetDataSingleton();

data1.AddSebuahData("Mahasiswa A");
data1.AddSebuahData("Mahasiswa B");
data1.AddSebuahData("Asisten Praktikum");

console.log("== Data2 Sebelum Penghapusan ==");
data2.PrintSemuaData();

data2.HapusSebuahData(2);

console.log("\n== Data1 Setelah Penghapusan ==");
data1.PrintSemuaData();

console.log("\nJumlah data:");
console.log(`data1: ${data1.GetSemuaData().length}`);
console.log(`data2: ${data2.GetSemuaData().length}`);
