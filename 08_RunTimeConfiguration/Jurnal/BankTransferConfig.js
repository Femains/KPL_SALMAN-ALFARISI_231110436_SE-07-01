const fs = require('fs');

class BankTransferConfig {
  constructor() {
    const configPath = './bank_transfer_config.json';
    let config = null;

    if (fs.existsSync(configPath)) {
      const data = fs.readFileSync(configPath);
      config = JSON.parse(data);
    }

    // Set nilai default jika tidak ditemukan
    this.lang = config?.lang ?? 'en';
    this.transfer = config?.transfer ?? {
      threshold: 25000000,
      low_fee: 6500,
      high_fee: 15000
    };
    this.methods = config?.methods ?? ["RTO (real-time)", "SKN", "RTGS", "BI FAST"];
    this.confirmation = config?.confirmation ?? {
      en: "yes",
      id: "ya"
    };
  }
}

module.exports = BankTransferConfig;
