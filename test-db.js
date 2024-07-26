const axios = require('axios');

// Fungsi untuk mendapatkan uraian barang
const fetchUraianBarang = async (kode_barang) => {
  try {
    const response = await axios.get(`https://api-hub.ilcs.co.id/my/n/barang?hs_code=${kode_barang}`);
    console.log('Uraian Barang:', response.data);
  } catch (error) {
    console.error('Error fetching uraian barang:', error.message);
  }
};

// Fungsi untuk mendapatkan tarif biaya impor
const fetchTarifBiayaImpor = async (kode_barang) => {
  try {
    const response = await axios.get(`https://api-hub.ilcs.co.id/my/n/tarif?hs_code=${kode_barang}`);
    console.log('Tarif Biaya Impor:', response.data);
  } catch (error) {
    console.error('Error fetching tarif biaya impor:', error.message);
  }
};

// Test API
const kode_barang = '10079000';
fetchUraianBarang(kode_barang);
fetchTarifBiayaImpor(kode_barang);