const CariNilaiPangkat = require('./Pangkat');

test('Pangkat normal 2^3 = 8', () => {
  expect(CariNilaiPangkat(2, 3)).toBe(8);
});

test('Jika b = 0 harus return 1', () => {
  expect(CariNilaiPangkat(5, 0)).toBe(1);
});

test('Jika b negatif, return -1', () => {
  expect(CariNilaiPangkat(2, -5)).toBe(-1);
});

test('Jika b > 10 atau a > 100, return -2', () => {
  expect(CariNilaiPangkat(2, 11)).toBe(-2);
  expect(CariNilaiPangkat(101, 2)).toBe(-2);
});

test('Jika hasil melebihi MAX_SAFE_INTEGER, return -3', () => {
  expect(CariNilaiPangkat(51, 10)).toBe(-3);
});
