const express = require('express');
const bodyParser = require('body-parser');
const Mahasiswa = require('./Mahasiswa');
const mahasiswa = require('./dataMahasiswa');

const app = express();
app.use(bodyParser.json());

// GET semua mahasiswa
app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswa);
});

// GET mahasiswa berdasarkan index
app.get('/api/mahasiswa/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    res.json(mahasiswa[index]);
  } else {
    res.status(404).send("Mahasiswa tidak ditemukan");
  }
});

// POST mahasiswa baru
app.post('/api/mahasiswa', (req, res) => {
  const { nama, nim } = req.body;
  const mhsBaru = new Mahasiswa(nama, nim);
  mahasiswa.push(mhsBaru);
  res.status(201).send("Mahasiswa ditambahkan");
});

// DELETE mahasiswa berdasarkan index
app.delete('/api/mahasiswa/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    mahasiswa.splice(index, 1);
    res.send("Mahasiswa dihapus");
  } else {
    res.status(404).send("Mahasiswa tidak ditemukan");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API berjalan di http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('API Mahasiswa aktif. Gunakan endpoint /api/mahasiswa');
});

