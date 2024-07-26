const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const SimulasiBiaya = require('../models/SimulasiBiaya');

const fetchUraianBarang = async (kode_barang) => {
  try {
    const response = await axios.get(`https://api-hub.ilcs.co.id/my/n/barang?hs_code=${kode_barang}`);
    if (response.data.code === '200' && response.data.data.length > 0) {
      return response.data.data[0].uraian_id || 'Tidak ditemukan';
    } else {
      return 'Tidak ditemukan';
    }
  } catch (error) {
    console.error('Error fetching uraian barang:', error.message);
    return 'Tidak ditemukan';
  }
};

const fetchTarifBiayaImpor = async (kode_barang) => {
  try {
    const response = await axios.get(`https://api-hub.ilcs.co.id/my/n/tarif?hs_code=${kode_barang}`);
    if (response.data.code === '200' && response.data.data.length > 0) {
      return parseInt(response.data.data[0].bm) || 0;
    } else {
      return 0;
    }
  } catch (error) {
    console.error('Error fetching tarif biaya impor:', error.message);
    return 0;
  }
};

const createSimulasiBiaya = async (req, res) => {
  try {
    const { kode_barang, nilai_komoditas } = req.body;

    if (!kode_barang || nilai_komoditas === undefined) {
      return res.status(400).json({ message: 'Kode barang dan nilai komoditas diperlukan.' });
    }

    const uraian_barang = await fetchUraianBarang(kode_barang);
    const bm = await fetchTarifBiayaImpor(kode_barang);
    const nilai_bm = (nilai_komoditas * bm) / 100;

    const simulasiData = {
      id_simulasi: uuidv4(),
      kode_barang,
      uraian_barang,
      bm,
      nilai_komoditas,
      nilai_bm,
      waktu_insert: new Date()
    };

    await SimulasiBiaya.createSimulasiBiaya(simulasiData);
    res.status(201).json({ message: 'Simulasi biaya berhasil dibuat', data: simulasiData });
  } catch (error) {
    res.status(500).json({ message: 'Terjadi kesalahan', error: error.message });
  }
};

module.exports = {
  createSimulasiBiaya
};
