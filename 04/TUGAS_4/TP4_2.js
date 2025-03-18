class DoorMachine {
    constructor() {
        this.state = "Terkunci"; // State awal adalah "Terkunci"
        this.showState();
    }

    // Method untuk mengunci pintu
    kunciPintu() {
        if (this.state === "Terbuka") {
            this.state = "Terkunci";
            this.showState();
        } else {
            console.log("Pintu sudah terkunci.");
        }
    }

    // Method untuk membuka pintu
    bukaPintu() {
        if (this.state === "Terkunci") {
            this.state = "Terbuka";
            this.showState();
        } else {
            console.log("Pintu sudah terbuka.");
        }
    }

    // Method untuk menampilkan state saat ini
    showState() {
        if (this.state === "Terkunci") {
            console.log("Pintu terkunci");
        } else {
            console.log("Pintu tidak terkunci");
        }
    }
}

// Fungsi utama untuk menjalankan simulasi
function main() {
    const pintu = new DoorMachine();
    pintu.bukaPintu(); // Pintu tidak terkunci
    pintu.kunciPintu(); // Pintu terkunci
    pintu.kunciPintu(); // Pintu sudah terkunci
    pintu.bukaPintu(); // Pintu tidak terkunci
}

// Jalankan program
main();
