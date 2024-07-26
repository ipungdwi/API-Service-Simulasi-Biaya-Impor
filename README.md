# Judul Proyek

API-Service-Simulasi-Biaya-Impor

# 



## Instalasi

1. Pastikan Node.js dan npm terinstal di komputer Anda.
2. Salin repositori ini ke komputer Anda.
3. Buka terminal dan navigasikan ke direktori proyek.
4. Instal dependensi dengan menjalankan perintah `npm install`.
5. Jalankan server dengan perintah `nodemon`.

## Database Mysql

CREATE TABLE simulasi_biaya (
  id_simulasi VARCHAR(36) PRIMARY KEY,
  kode_barang VARCHAR(8) NOT NULL,
  uraian_barang VARCHAR(200),
  bm INT,
  nilai_komoditas FLOAT,
  nilai_bm FLOAT,
  waktu_insert TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

## Buat .env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=123
DB_DATABASE=db_simulasibiayaimpor

## Testing via Postman atau Thunder Client
Method POST : http://localhost:5000/api/simulasi-biaya

Json :
{
  "kode_barang": "10079000",
  "nilai_komoditas": 50
}


## Testing Via Swagger Docs
1. Masukkian Link : http://localhost:5000/api-docs/
2. Pilih Bagian POST /simulasi-biaya
3. Klik Try it out
4. Masukkan Json
    {
        "kode_barang": "string",
        "nilai_komoditas": 100
    }
5. Execute
6. Lihat Hasil

© Tahun 2024 Ipung Dwi Ari Saputra