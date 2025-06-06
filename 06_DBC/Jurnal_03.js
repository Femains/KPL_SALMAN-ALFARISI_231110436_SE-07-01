class SayaTubeVideo {
  constructor(title) {
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  increasePlayCount(jumlah) {
    this.playCount += jumlah;
  }

  printVideoDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

class SayaTubeUser {
  constructor(username) {
    this.id = Math.floor(10000 + Math.random() * 90000);
    this.username = username;
    this.uploadedVideos = [];
  }

  addVideo(video) {
    this.uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
  }

  printAllVideoPlayCount() {
    console.log(`User: ${this.username}`);
    this.uploadedVideos.forEach((video, index) => {
      console.log(`Video ${index + 1} judul: ${video.title}`);
    });
  }
}

// Demo penggunaan
const user = new SayaTubeUser("Raka");
const judulFilm = [
  "Review Film Interstellar oleh Raka",
  "Review Film Inception oleh Raka",
  "Review Film The Dark Knight oleh Raka",
  "Review Film Tenet oleh Raka",
  "Review Film Dunkirk oleh Raka",
  "Review Film Oppenheimer oleh Raka",
  "Review Film The Prestige oleh Raka",
  "Review Film Memento oleh Raka",
  "Review Film The Batman oleh Raka",
  "Review Film Avatar oleh Raka"
];

judulFilm.forEach(judul => {
  const video = new SayaTubeVideo(judul);
  video.increasePlayCount(Math.floor(Math.random() * 1000));
  user.addVideo(video);
});

user.printAllVideoPlayCount();
console.log("Total Play Count:", user.getTotalVideoPlayCount());
