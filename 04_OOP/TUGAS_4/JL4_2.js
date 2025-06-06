class PosisiKarakterGame {
    constructor(nim) {
        this.state = "Berdiri"; // State awal
        this.nimMod = nim % 3; // Menentukan hasil mod NIM
        this.showState();
    }

    // Method untuk menangani tombol W ditekan
    tombolW() {
        if (this.state === "Jongkok") {
            this.state = "Berdiri";
        } else if (this.state === "Berdiri") {
            this.state = "Terbang";
        }
        this.showState();
    }

    // Method untuk menangani tombol S ditekan
    tombolS() {
        if (this.state === "Terbang") {
            this.state = "Berdiri";
        } else if (this.state === "Berdiri") {
            this.state = "Jongkok";
        } else if (this.state === "Jongkok") {
            this.state = "Tengkurap";
        }
        this.showState();
    }

    // Method untuk menangani tombol X ditekan
    tombolX() {
        if (this.state === "Terbang") {
            this.state = "Jongkok";
        }
        this.showState();
    }

    // Menampilkan kondisi karakter
    showState() {
        console.log("Posisi saat ini: " + this.state);
        
        // Implementasi tambahan berdasarkan mod NIM
        if (this.nimMod === 0) {
            if (this.state === "Tengkurap") console.log("Tombol arah bawah ditekan");
            if (this.state === "Jongkok") console.log("Tombola rah atas ditekan");
        } else if (this.nimMod === 1) {
            if (this.state === "Berdiri") console.log("Posisi standby");
            if (this.state === "Tengkurap") console.log("Posisi istirahat");
        } else if (this.nimMod === 2) {
            if (this.state === "Terbang") console.log("Posisi take off");
            if (this.state === "Jongkok") console.log("Posisi landing");
        }
    }
}

// Fungsi utama
function main() {
    const nim = 123456; // Ganti dengan NIM sesuai kebutuhan
    const karakter = new PosisiKarakterGame(nim);
    karakter.tombolW(); // Coba tombol W
    karakter.tombolS(); // Coba tombol S
    karakter.tombolX(); // Coba tombol X
}

// Jalankan program
main();