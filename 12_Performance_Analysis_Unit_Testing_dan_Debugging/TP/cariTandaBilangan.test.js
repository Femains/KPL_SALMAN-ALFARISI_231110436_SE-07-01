const cariTandaBilangan = require('./cariTandaBilangan');

describe('Unit Test: cariTandaBilangan', () => {
  test('Mengembalikan "Positif" untuk angka positif', () => {
    expect(cariTandaBilangan(5)).toBe("Positif");
  });

  test('Mengembalikan "Negatif" untuk angka negatif', () => {
    expect(cariTandaBilangan(-7)).toBe("Negatif");
  });

  test('Mengembalikan "Nol" untuk angka 0', () => {
    expect(cariTandaBilangan(0)).toBe("Nol");
  });
});
