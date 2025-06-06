const { NewsAgency, NewsReader } = require('./ObserverPattern');

function main() {
  // Membuat instance Subject
  const agency = new NewsAgency();

  // Membuat beberapa observer
  const reader1 = new NewsReader("Andi");
  const reader2 = new NewsReader("Budi");
  const reader3 = new NewsReader("Cici");

  // Menambahkan observer ke agency
  agency.addObserver(reader1);
  agency.addObserver(reader2);
  agency.addObserver(reader3);

  // Mengirim berita baru
  agency.setNews("Berita hari ini: Design Pattern Observer dipelajari!");
}

main();
