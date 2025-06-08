const readline = require('readline');
const CovidConfig = require('./CovidConfig');

const config = new CovidConfig();
config.ubahSatuan(); // <-- Ganti satuan suhu sesuai instruksi

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const satuanSuhu = config.get('satuan_suhu');

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${satuanSuhu}: `, (suhuInput) => {
    rl.question('Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala deman? ', (hariInput) => {
        const suhu = parseFloat(suhuInput);
        const hari = parseInt(hariInput);

        let suhuNormal = false;
        if (satuanSuhu === 'celcius') {
            suhuNormal = suhu >= 36.5 && suhu <= 37.5;
        } else if (satuanSuhu === 'fahrenheit') {
            suhuNormal = suhu >= 97.7 && suhu <= 99.5;
        }

        const hariNormal = hari < config.get('batas_hari_deman');

        if (suhuNormal && hariNormal) {
            console.log(config.get('pesan_diterima'));
        } else {
            console.log(config.get('pesan_ditolak'));
        }

        rl.close();
    });
});
