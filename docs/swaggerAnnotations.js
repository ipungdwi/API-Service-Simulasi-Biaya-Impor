// docs/swaggerAnnotations.js

/**
 * @swagger
 * components:
 *   schemas:
 *     SimulasiBiaya:
 *       type: object
 *       required:
 *         - kode_barang
 *         - nilai_komoditas
 *       properties:
 *         id_simulasi:
 *           type: string
 *           description: UUID dari simulasi biaya
 *         kode_barang:
 *           type: string
 *           description: Kode barang (8 karakter)
 *         uraian_barang:
 *           type: string
 *           description: Uraian barang
 *         bm:
 *           type: integer
 *           description: Tarif biaya impor
 *         nilai_komoditas:
 *           type: number
 *           format: float
 *           description: Nilai komoditas
 *         nilai_bm:
 *           type: number
 *           format: float
 *           description: Nilai BM
 *         waktu_insert:
 *           type: string
 *           format: date-time
 *           description: Waktu penyimpanan data
 */

/**
 * @swagger
 * /simulasi-biaya:
 *   post:
 *     summary: Buat simulasi biaya impor
 *     tags: [SimulasiBiaya]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - kode_barang
 *               - nilai_komoditas
 *             properties:
 *               kode_barang:
 *                 type: string
 *               nilai_komoditas:
 *                 type: number
 *                 format: float
 *     responses:
 *       201:
 *         description: Simulasi biaya berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SimulasiBiaya'
 *       400:
 *         description: Kode barang dan nilai komoditas diperlukan
 *       500:
 *         description: Terjadi kesalahan
 */
