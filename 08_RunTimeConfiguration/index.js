const readline = require('readline');
const BankTransferConfig = require('./BankTransferConfig');

const config = new BankTransferConfig();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isEnglish = config.lang === 'en';

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer)));
}

async function main() {
  // 1. Input jumlah transfer
  const msg = isEnglish
    ? "Please insert the amount of money to transfer: "
    : "Masukkan jumlah uang yang akan di-transfer: ";
  const amountInput = await ask(msg);
  const amount = parseInt(amountInput);

  if (isNaN(amount)) {
    console.log(isEnglish ? "Invalid amount." : "Jumlah tidak valid.");
    rl.close();
    return;
  }

  // 2. Hitung biaya transfer
  const fee = amount <= config.transfer.threshold
    ? config.transfer.low_fee
    : config.transfer.high_fee;

  const total = amount + fee;

  console.log(isEnglish
    ? `Transfer fee = ${fee}`
    : `Biaya transfer = ${fee}`);

  console.log(isEnglish
    ? `Total amount = ${total}`
    : `Total biaya = ${total}`);

  // 3. Pilih metode transfer
  console.log(isEnglish
    ? "Select transfer method:"
    : "Pilih metode transfer:");

  config.methods.forEach((method, i) => {
    console.log(`${i + 1}. ${method}`);
  });

  await ask(isEnglish
    ? "Select one option (1 - " + config.methods.length + "): "
    : "Pilih salah satu opsi (1 - " + config.methods.length + "): ");

  // 4. Konfirmasi transaksi
  const confirmPrompt = isEnglish
    ? `Please type "${config.confirmation.en}" to confirm the transaction: `
    : `Ketik "${config.confirmation.id}" untuk mengkonfirmasi transaksi: `;

  const confirmInput = await ask(confirmPrompt);

  const success =
    (isEnglish && confirmInput.toLowerCase() === config.confirmation.en.toLowerCase()) ||
    (!isEnglish && confirmInput.toLowerCase() === config.confirmation.id.toLowerCase());

  console.log(success
    ? (isEnglish ? "The transfer is completed" : "Proses transfer berhasil")
    : (isEnglish ? "Transfer is cancelled" : "Transfer dibatalkan"));

  rl.close();
}

main();

