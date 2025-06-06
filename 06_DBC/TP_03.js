class SayaTubeVideo {
  constructor(title) {
    this.id = Math.floor(10000 + Math.random() * 90000); 
    this.title = title;
    this.playCount = 0;
  }

  IncreasePlayCount(jumlah) {
    this.playCount += jumlah;
  }

  PrintVideoDetails() {
    console.log(`ID Video    : ${this.id}`);
    console.log(`Judul Video : ${this.title}`);
    console.log(`Play Count  : ${this.playCount}`);
  }
}


function main() {
  const namaPraktikan = "Revan"
  const video = new SayaTubeVideo(`Tutorial Design By Contract - ${namaPraktikan}`);
  
  video.IncreasePlayCount(100); 
  video.PrintVideoDetails();    
}

main();
