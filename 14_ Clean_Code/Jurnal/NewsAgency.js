/**
 * Class NewsAgency berperan sebagai Subject (Publisher)
 * yang menyimpan dan mengelola daftar observer.
 */
class NewsAgency {
  constructor() {
    this.observers = [];
    this.latestNews = '';
  }

  /**
   * Menambahkan observer baru ke daftar.
   * @param {object} observer - Observer yang akan menerima update
   */
  addObserver(observer) {
    this.observers.push(observer);
  }

  /**
   * Menghapus observer dari daftar.
   * @param {object} observer - Observer yang ingin dihapus
   */
  removeObserver(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  /**
   * Memberi tahu semua observer tentang berita terbaru.
   */
  notifyObservers() {
    this.observers.forEach((observer) => {
      observer.update(this.latestNews);
    });
  }

  /**
   * Mengatur berita terbaru dan memberi tahu observer.
   * @param {string} news - Berita baru yang akan dikirim
   */
  setNews(news) {
    this.latestNews = news;
    this.notifyObservers();
  }
}

module.exports = NewsAgency;
