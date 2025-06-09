const prompt = require('readline-sync');

console.log ("BGAIAN A")
const huruf = prompt.question("Masukkan satu huruf: ").toUpperCase();

if (["A", "I", "U", "E", "O"].includes(huruf)) {
    console.log(`Huruf ${huruf} merupakan huruf vokal`);
} else if (/^[A-Z]$/.test(huruf)) {
    console.log(`Huruf ${huruf} merupakan huruf konsonan`);
} else {
    console.log("Input bukan huruf kapital yang valid");
}

console.log ("BGAIAN B")
const arrayGenap = [];
for (let i = 1; i <= 5; i++) {
    arrayGenap.push(i * 2);
}

arrayGenap.forEach((nilai, index) => {
    console.log(`Angka genap ${index + 1} : ${nilai}`);
});
