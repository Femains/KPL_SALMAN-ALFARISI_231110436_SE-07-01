// Subject (Publisher)
class NewsAgency {
  constructor() {
    this.observers = [];
    this.latestNews = "";
  }

  // Menambahkan observer
  addObserver(observer) {
    this.observers.push(observer);
  }

  // Menghapus observer
  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  // Memberi tahu semua observer
  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.latestNews));
  }

  // Mengatur berita baru dan memberi tahu observer
  setNews(news) {
    this.latestNews = news;
    this.notifyObservers();
  }
}

// Observer
class NewsReader {
  constructor(name) {
    this.name = name;
  }

  update(news) {
    console.log(`${this.name} menerima berita baru: "${news}"`);
  }
}

// Export untuk digunakan di main.js
module.exports = { NewsAgency, NewsReader };
