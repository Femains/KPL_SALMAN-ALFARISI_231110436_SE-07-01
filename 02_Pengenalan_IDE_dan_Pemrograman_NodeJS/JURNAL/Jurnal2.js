

console.log ("BGAIAN A")
const prompt = require('readline-sync');

const nama = prompt.question("Masukkan nama Anda: ");
console.log(`Selamat datang, ${nama}!`);

console.log ("BGAIAN B")
const data = new Array(50);
for (let i = 0; i < 50; i++) {
    data[i] = i;
    if (i % 6 === 0) {
        console.log(`${i} #$#$`);
    } else if (i % 2 === 0) {
        console.log(`${i} ##`);
    } else if (i % 3 === 0) {
        console.log(`${i} $$`);
    } else {
        console.log(`${i}`);
    }
}


console.log ("BGAIAN C")
const nilaiString = prompt.question("Masukkan sebuah angka (1 - 10000): ");
const nilaiInt = parseInt(nilaiString);

if (apakahPrima(nilaiInt)) {
    console.log(`Angka ${nilaiInt} merupakan bilangan prima`);
} else {
    console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima`);
}

function apakahPrima(angka) {
    if (angka < 2) return false;
    for (let i = 2; i <= Math.sqrt(angka); i++) {
        if (angka % i === 0) return false;
    }
    return true;
}
