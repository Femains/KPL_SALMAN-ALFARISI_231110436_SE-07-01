/**
 * Class NewsReader adalah Observer yang menerima update dari NewsAgency.
 */
class NewsReader {
  /**
   * @param {string} name - Nama pembaca berita
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Method ini dipanggil saat ada update berita dari agency.
   * @param {string} news - Isi berita
   */
  update(news) {
    console.log(`${this.name} menerima berita baru: "${news}"`);
  }
}

module.exports = NewsReader;
