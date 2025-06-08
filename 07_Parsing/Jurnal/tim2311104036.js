const fs = require('fs');

class tim2311104036 {
  constructor(members) {
    this.members = members;
  }

  static ReadJSON(filePath) {
    try {
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      const obj = JSON.parse(jsonData);

      const team = new tim2311104036(obj.members);

      console.log("Team member list:");
      team.members.forEach(member => {
        console.log(`${member.nim} ${member.firstname} ${member.lastname} (${member.age} ${member.gender})`);
      });
    } catch (error) {
      console.error("Gagal membaca atau parse JSON:", error.message);
    }
  }
}


tim2311104036.ReadJSON('./jurnal7_2_2311104036.json');
