class KodePos {
    constructor() {
        this.tabelKodePos = {
            "Batununggal": 40266,
            "Kujangsari": 40287,
            "Mengger": 40267,
            "Wates": 40256,
            "Cijaura": 40287,
            "Jatisari": 40286,
            "Margasari": 40286,
            "Sekejati": 40286,
            "Kebonwaru": 40272,
            "Maleer": 40274,
            "Samoja": 40273
        };
    }

    getKodePos(kelurahan) {
        return this.tabelKodePos[kelurahan] || "Kode Pos tidak ditemukan";
    }
}

// Fungsi main untuk menampilkan tabel kode pos
function main() {
    const kodePos = new KodePos();
    console.log("Kelurahan".padEnd(15) + "Kode Pos");
    console.log("==========================");
    for (let kelurahan in kodePos.tabelKodePos) {
        console.log(kelurahan.padEnd(15) + kodePos.getKodePos(kelurahan));
    }
}


// Panggil fungsi main
main();
