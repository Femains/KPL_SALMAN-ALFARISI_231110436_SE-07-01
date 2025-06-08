const fs = require('fs');

class CovidConfig {
    constructor(configPath = './covid_config.json') {
        this.configPath = configPath;
        this.defaultConfig = {
            satuan_suhu: "celcius",
            batas_hari_deman: 14,
            pesan_ditolak: "Anda tidak diperbolehkan masuk ke dalam gedung ini",
            pesan_diterima: "Anda dipersilahkan untuk masuk ke dalam gedung ini"
        };
        this.config = this.loadConfig();
    }

    loadConfig() {
        if (!fs.existsSync(this.configPath)) {
            fs.writeFileSync(this.configPath, JSON.stringify(this.defaultConfig, null, 4));
            return { ...this.defaultConfig };
        }

        const rawData = fs.readFileSync(this.configPath);
        return JSON.parse(rawData);
    }

    saveConfig() {
        fs.writeFileSync(this.configPath, JSON.stringify(this.config, null, 4));
    }

    ubahSatuan() {
        this.config.satuan_suhu = this.config.satuan_suhu === 'celcius' ? 'fahrenheit' : 'celcius';
        this.saveConfig();
    }

    get(key) {
        return this.config[key] || this.defaultConfig[key];
    }
}

module.exports = CovidConfig;
