const NewsAgency = require('./NewsAgency');
const NewsReader = require('./NewsReader');

/**
 * Fungsi utama menjalankan alur Observer Pattern:
 * membuat agency, menambahkan observer, dan mengirim berita.
 */
function main() {
  const agency = new NewsAgency();

  const reader1 = new NewsReader('Andi');
  const reader2 = new NewsReader('Budi');
  const reader3 = new NewsReader('Cici');

  agency.addObserver(reader1);
  agency.addObserver(reader2);
  agency.addObserver(reader3);

  agency.setNews('Berita hari ini: Design Pattern Observer dipelajari!');
}

main();
