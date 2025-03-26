class HaloGeneric {
    sapaUser(user) {
      console.log(`Halo user ${user}`);
    }
  }

class DataGeneric {
    constructor(data) {
      this.data = data;
    }
  
    printData() {
      console.log(`Data yang ditampilkan: ${this.data}`);
    }
  }
  

const data = new DataGeneric("2311104036"); 
data.printData();
  
  const halo = new HaloGeneric();
  halo.sapaUser("SALMAN ALFARISI"); 
  