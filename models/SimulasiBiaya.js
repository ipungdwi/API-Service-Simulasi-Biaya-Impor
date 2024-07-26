const db = require('../config/db');

const createSimulasiBiaya = async (data) => {
  const { id_simulasi, kode_barang, uraian_barang, bm, nilai_komoditas, nilai_bm, waktu_insert } = data;

  // Pastikan semua parameter didefinisikan
  if (!id_simulasi || !kode_barang || !uraian_barang || bm === undefined || nilai_komoditas === undefined || nilai_bm === undefined || !waktu_insert) {
    throw new Error('Beberapa parameter tidak didefinisikan.');
  }

  const sql = `
    INSERT INTO simulasi_biaya (id_simulasi, kode_barang, uraian_barang, bm, nilai_komoditas, nilai_bm, waktu_insert)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  const [result] = await db.execute(sql, [id_simulasi, kode_barang, uraian_barang, bm, nilai_komoditas, nilai_bm, waktu_insert]);
  return result;
};

module.exports = {
  createSimulasiBiaya
};
