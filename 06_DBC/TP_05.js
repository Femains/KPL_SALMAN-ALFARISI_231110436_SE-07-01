class SayaTubeVideo {
  constructor(title) {
    if (title == null || title.length > 100) {
      throw new Error("Judul video tidak valid (null atau > 100 karakter)");
    }

    this.id = Math.floor(10000 + Math.random() * 90000);
    this.title = title;
    this.playCount = 0;
  }

  increasePlayCount(jumlah) {
    try {
      // Precondition
      if (jumlah > 10000000 || jumlah < 0) {
        throw new Error("Penambahan play count harus 0 - 10.000.000");
      }

      
      if (this.playCount + jumlah > Number.MAX_SAFE_INTEGER) {
        throw new Error("Terjadi overflow saat menambah play count");
      }

      this.playCount += jumlah;
    } catch (e) {
      console.error("Exception ditangkap: " + e.message);
    }
  }

  printVideoDetails() {
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Play Count: ${this.playCount}`);
  }
}


try {
  
  const video1 = new SayaTubeVideo("Review Film Inception oleh Raka"); 
  video1.increasePlayCount(5000000); 
  video1.printVideoDetails();

  
  const video2 = new SayaTubeVideo("X".repeat(101)); 
} catch (e) {
  console.error("Exception judul: " + e.message);
}

try {
  const video3 = new SayaTubeVideo("Film Test Overflow");

  
  for (let i = 0; i < 100000; i++) {
    video3.increasePlayCount(10000000); 
    if (video3.playCount >= Number.MAX_SAFE_INTEGER) break;
  }

  video3.printVideoDetails();
} catch (e) {
  console.error("Exception loop overflow: " + e.message);
}
