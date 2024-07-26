# API-Service-Simulasi-Biaya-Impor

**APP INI SUDAH BERHASIL DI DEPLOY KE GOOGLE CLOUD**

## 1. Infrastruktur

### Compute Engine
- **Mesin Server**
  - **Region:** asia-southeast2 (Jakarta)
  - **Zone:** asia-southeast2-a
  - **Machine Type:** e2-micro (2 vCPU, 1 GB memory)
  - **Boot Disk:** 
    - Type: New balanced persistent disk 
    - Size: 10 GB 
    - Image: Ubuntu 20.04 LTS

### Cloud SQL - MySQL
- **Database**
  - **Database Version:** MySQL 5.7
  - **Cloud SQL Edition:** Enterprise
  - **Preset:** Development
  - **Region:** asia-southeast2
  - **Zonal availability:** Single Zone
  - **Machine:** Shared core (1 vCPU, 0.614 GB)
  - **Storage:** HDD 10 GB

## 2. Testing via Postman atau Thunder Client

### Endpoint
- **Method:** POST 
- **URL:** `http://34.101.109.61:5000/api/simulasi-biaya`

### JSON:
```json
{
  "kode_barang": "10079000",
  "nilai_komoditas": 50
}
```

CREATE TABLE simulasi_biaya (
  id_simulasi VARCHAR(36) PRIMARY KEY,
  kode_barang VARCHAR(8) NOT NULL,
  uraian_barang VARCHAR(200),
  bm INT,
  nilai_komoditas FLOAT,
  nilai_bm FLOAT,
  waktu_insert TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
