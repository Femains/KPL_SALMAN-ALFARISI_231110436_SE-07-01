class SayaTubeVideo {
  constructor(title) {
    if (title == null || title.length > 200) {
      throw new Error("Judul tidak valid (null atau lebih dari 200 karakter)");
    }

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  increasePlayCount(jumlah) {
    try {
      if (jumlah < 0 || jumlah > 25000000) {
        throw new Error("Jumlah play count tidak valid (negatif atau lebih dari 25.000.000)");
      }
      const result = this.playCount + jumlah;
      if (result > Number.MAX_SAFE_INTEGER) {
        throw new Error("Overflow play count");
      }
      this.playCount = result;
    } catch (e) {
      console.error("Error: " + e.message);
    }
  }

  printVideoDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}

class SayaTubeUser {
  constructor(username) {
    if (username == null || username.length > 100) {
      throw new Error("Username tidak valid (null atau lebih dari 100 karakter)");
    }

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.username = username;
    this.uploadedVideos = [];
  }

  addVideo(video) {
    if (video == null) throw new Error("Video tidak boleh null");
    if (video.playCount >= Number.MAX_SAFE_INTEGER)
      throw new Error("Play count video terlalu besar");

    this.uploadedVideos.push(video);
  }

  getTotalVideoPlayCount() {
    return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
  }

  printAllVideoPlayCount() {
    console.log(`User: ${this.username}`);
    for (let i = 0; i < Math.min(8, this.uploadedVideos.length); i++) {
      console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
    }
  }
}

// Pengujian precondition dan postcondition
try {
  const user = new SayaTubeUser("Raka");

  for (let i = 0; i < 10; i++) {
    let title = `Review Film ke-${i + 1} oleh Raka`;
    let video = new SayaTubeVideo(title);
    video.increasePlayCount(25000000); // valid
    user.addVideo(video);
  }

  // Test overflow
  const videoOverflow = new SayaTubeVideo("Video Overflow Test");
  videoOverflow.increasePlayCount(Number.MAX_SAFE_INTEGER); // akan error
  user.addVideo(videoOverflow); // akan error

  user.printAllVideoPlayCount(); // hanya cetak 8 video
  console.log("Total Play Count:", user.getTotalVideoPlayCount());
} catch (e) {
  console.error("Exception caught: " + e.message);
}
