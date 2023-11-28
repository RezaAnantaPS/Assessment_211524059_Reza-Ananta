// BarangRoute.js
import express from "express";
import {
  getAllBarang,
  createBarang,
  updateBarang,
  deleteBarang,
  getBarangByKodeBarang,
} from "../controllers/BarangController.js";

const router = express.Router();

router.get("/barang", getAllBarang);
router.post("/barang", createBarang);
router.patch("/barang/:KodeBarang", updateBarang);
router.delete("/barang/:KodeBarang", deleteBarang);
router.get("/barang/:KodeBarang", getBarangByKodeBarang);

export default router;
