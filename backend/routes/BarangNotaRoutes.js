import express from "express";
import {
  getAllBarangNota,
  createBarangNota,
  updateBarangNota,
  deleteBarangNota,
  getBarangNotaByKodeBarangNota,
} from "../controllers/BarangNotaController.js";

const router = express.Router();

router.get("/barangnota", getAllBarangNota);
router.post("/barangnota", createBarangNota);
router.patch("/barangnota/:KodeBarangNota", updateBarangNota);
router.delete("/barangnota/:KodeBarangNota", deleteBarangNota);
router.get("/barangnota/:KodeBarangNota", getBarangNotaByKodeBarangNota);

export default router;
