const fs = require('fs');

class Glossary2311104036 {
  constructor(glossEntry) {
    this.glossEntry = glossEntry;
  }

  static ReadJSON(filePath) {
    try {
      const rawData = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(rawData);

      const glossEntry = parsed.glossary?.GlossDiv?.GlossList?.GlossEntry;

      if (!glossEntry) {
        throw new Error("GlossEntry tidak ditemukan di file JSON");
      }

      const item = new Glossary2311104036(glossEntry);

      console.log("===== GLOSS ENTRY =====");
      console.log(`ID        : ${item.glossEntry.ID}`);
      console.log(`GlossTerm : ${item.glossEntry.GlossTerm}`);
      console.log(`Acronym   : ${item.glossEntry.Acronym}`);
      console.log(`Abbrev    : ${item.glossEntry.Abbrev}`);
      console.log(`Definisi  : ${item.glossEntry.GlossDef.para}`);
      console.log(`See Also  : ${item.glossEntry.GlossDef.GlossSeeAlso.join(', ')}`);
      console.log(`GlossSee  : ${item.glossEntry.GlossSee}`);
    } catch (err) {
      console.error("Gagal membaca GlossEntry:", err.message);
    }
  }
}


Glossary2311104036.ReadJSON('./jurnal7_3_2311104036.json');
