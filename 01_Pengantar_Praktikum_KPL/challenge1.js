import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("Siapa nama kamu? ", (nama) => {
    console.info(`Hallo ${nama} `)
    input.question("Jurusan kamu apa? ", (jurusan) => {
    console.info(`owhh kamu jurusan ${jurusan} `)
    input.question("Kamu dari universitas mana? ", (univ) => {
        console.info(`owhh dari univ ${univ} `)
        input.question("BTW umur kamu berapa yah? ", (umur) => {
            console.info(`owh umur kamu ${umur} tohh`)
            input.close();
        })
    })
})
})

